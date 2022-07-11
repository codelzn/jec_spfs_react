import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import HeadCom from '../components/headCom';
import styles from '../styles/Memory.module.scss';

const Memory: NextPage = () => {
  return (
    <div className={styles.memorycontainer}>
      <Head>
        <title key="title">思い出｜第26回スポーツフェスティバル｜日本電子専門学校</title>
      </Head>
      <HeadCom />
      <main>
      <h2>思い出を残しましょう</h2>
      <section className="func">
        <h3>共有方法</h3>
        <p>
          スポフェスオリジナル
          <br />
          ハッシュタグで<i>Instagram</i>へ投稿し
          <br />
          みんなの思い出を共有しよう！
        </p>
        <p className="spfshash">
          <a href="#">＃22日専スポフェス</a>
        </p>
      </section>
      <section className="sample">
        <img src="/images/share1.jpg" alt="スポフェスの写真" />
        <img src="/images/share2.jpg" alt="スポフェスの写真" />
        <img src="/images/share3.jpg" alt="スポフェスの写真" />
        <img src="/images/share4.jpg" alt="スポフェスの写真" />
      </section>
      <section className="notice">
        <h3>注意点</h3>
        <p>
          公序良俗に反する行為はお止め下さい。
          <br />
          アプリケーションの動作環境により生じるいかなる損害については、当方が責任を負うものではありません。
          <br />
          投稿によって発生したトラブルにつきましても、<br />当方が一切責任を負うものではありません。
        </p>
      </section>
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