declare const process: {
  env: {
    [key: string]: string | undefined;
    NODE_ENV?: 'development' | 'production';
  };
};

export const ENV = {
  IS_PRODUCTION_MODE: process.env.NODE_ENV === 'production',
  TOKEN_KEY: process.env.NEXT_PUBLIC_TOKEN_KEY as string,
  JWT_SECRET_KEY: process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string,
  REDIRECT_URI: process.env.NEXT_PUBLIC_REDIRECT_URI as string,
  KAKAO_AUTH_URI: process.env.NEXT_PUBLIC_KAKAO_AUTH_URI as string,
  KAKAO_CLIENT_ID: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID as string,
  KAKAO_RESPONSE_TYPE: process.env.NEXT_PUBLIC_KAKAO_RESPONSE_TYPE as string,
} as const;
