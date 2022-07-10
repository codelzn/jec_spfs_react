import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Venue.module.scss';

const Venue: NextPage = () => {
  return <div className={styles.venuecontainer}>
    <Head>
      <title key="title">開催情報｜第26回スポーツフェスティバル｜日本電子専門学校</title>
    </Head>
    <header>
      <h1>Venue</h1>
    </header>
    <main>
      <h1>Main</h1>
    </main>
  </div>;
};

export const getStaticProps: GetStaticProps = async ctx => {
  return {
    props: {
      data: null,
    },
  };
};

export default Venue;
