import type { NextMiddleware, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import {
  ENV,
  PROTECTED_REDIRECT_URL,
  PRIVATE_REDIRECT_URL,
  PRIVATE_PAGE_URL,
  PROTECTED_PAGE_URL,
} from './constants';
import { verify } from './utils';

export const middleware: NextMiddleware = async (req: NextRequest) => {
  const AUTH_TOKEN = req.cookies.get(ENV.TOKEN_KEY);

  if (req.nextUrl.pathname.startsWith('/login')) {
    const REFRESH_TOKEN = req.nextUrl.searchParams.get('refreshToken') ?? '';
    const NEXT_URL = req.nextUrl.clone();

    NEXT_URL.pathname = REFRESH_TOKEN
      ? PROTECTED_REDIRECT_URL
      : PRIVATE_REDIRECT_URL;
    NEXT_URL.search = '';

    const res = NextResponse.redirect(NEXT_URL);

    if (REFRESH_TOKEN) {
      res.cookies.set(ENV.TOKEN_KEY, REFRESH_TOKEN, {
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
      });
    }

    return res;
  }

  // 토큰이 있을 경우
  if (AUTH_TOKEN) {
    const IS_JWT_VALID = await verify(AUTH_TOKEN.value, ENV.JWT_SECRET_KEY);

    // 토큰 검증
    if (IS_JWT_VALID) {
      // PROTECTED 페이지 URL들을 가져오고 내가 위치한 URL을 교차검증
      const { pathname } = req.nextUrl;
      if (PROTECTED_PAGE_URL.includes(pathname)) {
        // 토큰이 있는데 로그인 페이지로 이동 했을 경우 /home 으로 이동

        const URL = req.nextUrl.clone();
        URL.pathname = PROTECTED_REDIRECT_URL;
        URL.search = '';

        return NextResponse.redirect(URL);
      }
    } else {
      // 만약 토큰 값이 틀린 경우
      const { pathname } = req.nextUrl;
      if (PRIVATE_PAGE_URL.includes(pathname)) {
        const URL = req.nextUrl.clone();
        URL.pathname = PRIVATE_REDIRECT_URL;
        URL.search = '';

        return NextResponse.redirect(URL);
      }
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
