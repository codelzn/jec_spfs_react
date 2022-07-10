import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import HamMenu from '../components/hamMenu';
import FooterCom from '../components/footerCom';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          key="viewport"
        />
        <link rel="icon" href="/favicon.ico" />
        <title key="title">
          HOME｜第26回スポーツフェスティバル｜日本電子専門学校
        </title>
      </Head>
      <HamMenu />
      <Component {...pageProps} />
      <FooterCom />
    </>
  );
}

export default MyApp;
