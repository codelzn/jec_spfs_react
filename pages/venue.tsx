import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Venue.module.scss';
import HeadCom from '../components/headCom';

const Venue: NextPage = () => {
  return <div className={styles.venuecontainer}>
    <Head>
      <title key="title">開催情報｜第26回スポーツフェスティバル｜日本電子専門学校</title>
    </Head>
    <HeadCom />
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
