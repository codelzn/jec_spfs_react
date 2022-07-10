import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.homecontainer}>
      <header>
        <section className="mainVisual">
          <h1>
            <img
              className="logo"
              src="/images/spfs_logo.svg"
              alt="スポーツフェスティバルのロゴ"
            />
          </h1>
          <ul>
            <li>8月18日（木）</li>
            <li>午前：９：００〜</li>
            <li>午後：１３：３０〜</li>
            <li>場所：東京ドーム</li>
          </ul>
        </section>
      </header>
      <main>
        <section className="catch color-section" data-color="#ffffff">
          <h2>R e ： b o o t</h2>
          <p>
            意味：２年間の中止により前回の参加者
            がいないため、0からのスタートと新しく 始める!
          </p>
        </section>
        <section className="intro color-section" data-color="#ecf6e0">
          <h2>スポフェスとは</h2>
          <div className="intro_content">
            <ul>
              <li>三年ぶりの開催</li>
              <li>26回目のスポフェス</li>
              <li>４色色別で行う</li>
              <li>約3000人参加</li>
            </ul>
            <p>
              <img src="/images/intro.jpg" alt="みんなの写真" />
            </p>
          </div>
          <div className="btn ks">
            <a href="./venue/index.html">詳しい開催情報</a>
          </div>
        </section>
        <section className="concept color-section" data-color="#ecf6e0">
          <h2>スポフェスはこういう感じ</h2>
          <video src="/images/video.mp4" muted autoPlay loop></video>
          <div className="btn kg">
            <a href="./competition/index.html">詳しい競技情報</a>
          </div>
        </section>
        <section className="message color-section" data-color="#fbf5d5">
          <h2>
            校長＆実行委員長
            <br />
            からのメッセージ
          </h2>
          <section className="msg-item">
            <div className="msg-img"></div>
            <div className="msg-text">
              <h3>校長：船山　世界</h3>
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </section>
          <section className="msg-item">
            <div className="msg-img"></div>
            <div className="msg-text">
              <h3>校長：船山　世界</h3>
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </section>
        </section>
        <section className="qs">
          <h2>よくある質問</h2>
          <ul>
            <li>
              <a href="./access/index.html">
                <em>アクセス</em>
                が知りたい
              </a>
            </li>
            <li>
              <a href="./memory/index.html">
                <em>思い出</em>
                を残したい
              </a>
            </li>
            <li>
              <a href="./notice/index.html">
                <em>不安</em>
                がある
              </a>
            </li>
            <li>
              <a href="#">
                <em>☎︎</em>
                他の質問
              </a>
            </li>
          </ul>
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

export default Home;
