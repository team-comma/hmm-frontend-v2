import type { NextMiddleware, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import {
  PROTECTED_REDIRECT_URL,
  PRIVATE_REDIRECT_URL,
  PRIVATE_PAGE_URL,
  PROTECTED_PAGE_URL,
} from './constants';
import { verify } from './utils';

export const middleware: NextMiddleware = async (req: NextRequest) => {
  const { TOKEN_KEY, JWT_SECRET_KEY } = process.env;

  if (!TOKEN_KEY || !JWT_SECRET_KEY)
    throw new Error(
      'process.env.TOKEN_KEY or JWT_SECRET_KEY not defined. Check your environment variables.'
    );

  const AUTH_TOKEN = req.cookies.get(TOKEN_KEY);

  if (req.nextUrl.pathname.startsWith('/login')) {
    const REFRESH_TOKEN = req.nextUrl.searchParams.get('refreshToken') ?? '';
    const NEXT_URL = req.nextUrl.clone();

    NEXT_URL.pathname = REFRESH_TOKEN
      ? PROTECTED_REDIRECT_URL
      : PRIVATE_REDIRECT_URL;
    NEXT_URL.search = '';

    const res = NextResponse.redirect(NEXT_URL);

    if (REFRESH_TOKEN) {
      res.cookies.set(TOKEN_KEY, REFRESH_TOKEN, {
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
      });
    }

    return res;
  }

  const isAccessAllowed = (path: string[], redirect: string) => {
    const { pathname } = req.nextUrl;
    const isAllowed = path.includes(pathname);

    if (!isAllowed) return;

    const URL = req.nextUrl.clone();
    URL.pathname = redirect;
    URL.search = '';

    return NextResponse.redirect(URL);
  };

  // 토큰이 있을 경우
  if (AUTH_TOKEN) {
    const IS_JWT_VALID = await verify(AUTH_TOKEN.value, JWT_SECRET_KEY);

    // 토큰 검증
    if (IS_JWT_VALID) {
      return isAccessAllowed(PROTECTED_PAGE_URL, PROTECTED_REDIRECT_URL);
    } else {
      return isAccessAllowed(PRIVATE_PAGE_URL, PRIVATE_REDIRECT_URL);
    }
  } else {
    const { pathname } = req.nextUrl;
    if (!PRIVATE_PAGE_URL.includes(pathname)) return;

    const URL = req.nextUrl.clone();

    URL.pathname = PRIVATE_REDIRECT_URL;
    URL.search = '';

    return NextResponse.redirect(URL);
  }
};
