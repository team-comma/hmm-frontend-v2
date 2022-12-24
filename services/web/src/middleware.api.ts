import type { NextMiddleware, NextRequest } from 'next/server';

export const middleware: NextMiddleware = (request: NextRequest) => {
  console.log('전역 미들웨어');
};
