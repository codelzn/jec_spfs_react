import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Memory.module.scss';

const Memory: NextPage = () => {
  return (
    <div className={styles.memorycontainer}>
      <Head>
        <title key="title">思い出｜第26回スポーツフェスティバル｜日本電子専門学校</title>
      </Head>
      <header>
        <h1>Memory</h1>
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

export default Memory;