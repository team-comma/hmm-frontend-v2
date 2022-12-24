declare const process: {
  env: {
    [key: string]: string | undefined;
    NODE_ENV?: 'development' | 'production';
  };
};

export const env = {
  IS_PRODUCTION_MODE: process.env.NODE_ENV === 'production',
  TOKEN_KEY: process.env.NEXT_PUBLIC_TOKEN_KEY as string,
  JWT_SECRET_KEY: process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string,
} as const;
