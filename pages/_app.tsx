import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import React from 'react';
import { GetStaticProps } from 'next';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        {pageProps['production'] ? (
          <link rel="manifest" href="/SWMinder-front/manifest.json" />
        ) : (
          <></>
        )}
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      production: process.env.NODE_ENV === 'production',
    },
  };
};
