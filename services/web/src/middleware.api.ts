import type { NextMiddleware, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import {
  PROTECTED_PAGES,
  PROTECTED_REDIRECT_URL,
  PROTECTED_REDIRECT_URL_FOR_LOGIN,
} from './constants';
import { verify } from './utils';

export const middleware: NextMiddleware = async (req: NextRequest) => {
  const { TOKEN_KEY, JWT_SECRET_KEY } = process.env;
  const { pathname, searchParams, host, protocol } = req.nextUrl;

  const generateUrl = (path: string) => `${protocol}//${host}${path}`;

  if (!TOKEN_KEY || !JWT_SECRET_KEY)
    throw new Error(
      'process.env.TOKEN_KEY or JWT_SECRET_KEY not defined. Check your environment variables.'
    );

  // Next.js static 파일인 경우 허용
  if (pathname.includes('_next')) return;

  if (pathname.startsWith('/login')) {
    const refreshTokenFromQuery = searchParams.get('refreshToken') ?? '';

    const redirectUrl = refreshTokenFromQuery
      ? PROTECTED_REDIRECT_URL_FOR_LOGIN
      : PROTECTED_REDIRECT_URL;

    const url = generateUrl(redirectUrl);
    const response = NextResponse.redirect(new URL(url));

    if (refreshTokenFromQuery)
      response.cookies.set(TOKEN_KEY, refreshTokenFromQuery, {
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
      });

    return response;
  }

  const refreshToken = req.cookies.get(TOKEN_KEY);

  let redirectUrl = PROTECTED_REDIRECT_URL;

  // 로그인 유저인 경우
  if (refreshToken) {
    const isValidJWT = await verify(refreshToken.value, JWT_SECRET_KEY);
    // 올바른 리프레시 토큰 + 허용된 경로 접근 시 -> 허용
    if (isValidJWT && PROTECTED_PAGES.includes(pathname)) return;

    // 변조된 리프레시 토큰 또는 허용되지 않은 경로 접근 시 -> 리다이렉트 URL 수정
    redirectUrl = PROTECTED_REDIRECT_URL_FOR_LOGIN;
  }

  // 비로그인 유저인 경우, 로그인 유저만 접근 가능한 경로에 접근하는 경우가 아닌 경우 -> 허용
  if (!refreshToken && !PROTECTED_PAGES.includes(pathname)) return;

  // 위 로직에서 핸들링되지 않은 경우 -> 최종 리다이렉트
  const url = generateUrl(redirectUrl);
  return NextResponse.redirect(new URL(url));
};
