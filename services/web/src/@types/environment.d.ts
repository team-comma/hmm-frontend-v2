declare const process: {
  env: {
    [key: string]: string | undefined;
    NODE_ENV?: 'development' | 'production';
  };
};
