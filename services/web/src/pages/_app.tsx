import { AppProps } from 'next/app';

import { globalStyles } from '@comma/ds';

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles();
  return <Component {...pageProps} />;
};

export default MyApp;
