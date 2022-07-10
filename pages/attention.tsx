import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Attention.module.scss';

const Attention: NextPage = () => {
  return (
    <div className={styles.attentioncontainer}>
      <Head>
        <title key="title">注意事項｜第26回スポーツフェスティバル｜日本電子専門学校</title>
      </Head>
      <header>
        <h1>Attention</h1>
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

export default Attention;