import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import React from 'react';
import { GetStaticProps } from 'next';
import { css } from '@emotion/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        {pageProps['production'] ? <link rel="manifest" href="/manifest.json" /> : <></>}
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
      <p
        css={css`
          position: fixed;
          margin: 10px 0 0 10px;
          left: 0;
          top: 0;
          font-size: 20px;
          font-weight: bolder;
          color: #bebebe;
          pointer-events: none;
        `}
      >
        소마인더
      </p>
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
