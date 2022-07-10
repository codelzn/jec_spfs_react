import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Access.module.scss';

const Access: NextPage = () => {
  return (
    <div className={styles.accesscontainer}>
      <Head>
        <title key="title">アクセス｜第26回スポーツフェスティバル｜日本電子専門学校</title>
      </Head>
      <header>
        <h1>Access</h1>
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

export default Access;