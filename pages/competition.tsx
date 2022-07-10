import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Competition.module.scss';

const Competition: NextPage = () => {
  return (
    <div className={styles.competitioncontainer}>
      <Head>
        <title key="title">競技情報｜第26回スポーツフェスティバル｜日本電子専門学校</title>
      </Head>
      <header>
        <h1>Competition</h1>
      </header>
      <main>
        <h1>Main</h1>
      </main>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async ctx => {
  return {
    props: {
      data: null,
    },
  };
};

export default Competition;