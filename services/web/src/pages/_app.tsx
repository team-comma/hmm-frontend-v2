import { AppProps } from 'next/app';
import Head from 'next/head';

import { globalStyles } from '@comma/ds';

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return (
    <>
      <Head>
        <title>Hmm - 우리 같이 들어요 !</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
