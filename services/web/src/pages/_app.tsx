import { AppProps } from 'next/app';
import Head from 'next/head';

import { globalStyles } from '@comma/ds';

import { QueryClientProvider } from '../hooks';

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return (
    <QueryClientProvider>
      <Head>
        <title>Hmm - 우리 같이 들어요 !</title>
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
