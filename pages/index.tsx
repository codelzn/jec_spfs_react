import type { GetStaticProps, NextPage } from 'next';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  // videoは重いから、全部読み込んでからロードする
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoHandler = (): void => {
    videoRef.current!.src = '/images/video.mp4';
    videoRef.current!.addEventListener('canplay', () => {
      if (videoRef.current!.paused) {
        videoRef.current!.play();
      }
    });
  };
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [audioActive, setAudioActive] = useState<boolean>(false);
  const loadAudio = () => {
    setAudio(new Audio('/images/bgmusic.mp3'));
  };
  const playMusic = () => {
    audio?.paused ? audio.play() : audio?.pause();
    setAudioActive(!audioActive);
  };
  useEffect(() => {
    loadAudio();
    videoHandler();
  }, []);
  return (
    <div className={styles.homecontainer}>
      <header>
        <section className="mainVisual">
          <h1>
            <picture>
              <img
                className="logo"
                src="/images/spfs_logo.svg"
                alt="スポーツフェスティバルのロゴ"
              />
            </picture>
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
        <section className="catch">
          <h2>R e ： b o o t</h2>
          <p>
            意味：２年間の中止により前回の参加者
            がいないため、0からのスタートと新しく 始める!
          </p>
        </section>
        <section className="intro">
          <h2>スポフェスとは</h2>
          <div className="intro_content">
            <ul>
              <li>三年ぶりの開催</li>
              <li>26回目のスポフェス</li>
              <li>４色色別で行う</li>
              <li>約3000人参加</li>
            </ul>
            <p>
              <picture>
                <img src="/images/intro.jpg" alt="みんなの写真" />
              </picture>
            </p>
          </div>
          <div className="btn ks">
            <Link href="/venue">
              <a>詳しい開催情報</a>
            </Link>
          </div>
        </section>
        <section className="concept">
          <h2>スポフェスはこういう感じ</h2>
          <div className="conmain">
            <video playsInline autoPlay muted loop ref={videoRef}></video>
            <div className="bgmusic" onClick={playMusic}></div>
            <div className={`bgtext ${audioActive ? 'active' : ''}`}>
              現場の雰囲気を感じてみませんか？
            </div>
          </div>
          <div className="btn kg">
            <Link href="/competition">
              <a href="./competition/index.html">詳しい競技情報</a>
            </Link>
          </div>
        </section>
        <section className="message">
          <h2>
            校長＆実行委員長
            <br />
            からのメッセージ
          </h2>
          <section className="msg-item item1">
            <div className="msg-img tea"></div>
            <div className="msg-text">
              <h3>校長：船山　世界</h3>
              <p>
                日本電子専門学校の全学生と教職員が一堂に会する唯一の学校行事「令和４年度第２６回スポーツフェスティバル」が、野球の殿堂「東京ドーム」で８月１８日に開催されます。今回は、２年間のコロナ禍自粛をまたいで３年ぶりの開催となります。学生の皆さんは全員揃って初めてのスポーツフェスティバルを経験することになりました。
                <br></br>
                これを受けて、今年のキャッチフレーズは『Ｒｅ：ｂｏｏｔ』となりました。「２年間の中止により前回の参加者がいないため、０からのスタートとして新しく始める。」という意味を込めたそうです。まさにその通り！　そして、短時間２部制を採用し、参加者どうしの感染を起こさないように万全のコロナ対策をもって臨みます。学生の皆さんの協力を宜しくお願い申し上げます。
                <br></br>
                さて、当日は短い時間ではありますが、クラスメートやチームメートと親睦を深め、協力しあい、社会人基礎力を養う絶好の機会として頂きたいと思います。夏休み中で暑さが厳しい時期ですので、しっかりと体調を整えて、怪我や体調不良そしてコロナ感染が無いように願います。日本電子専門学校の総力で、２６年の伝統を誇るスポーツフェスティバルを成功させましょう。
                <br></br>
                末筆ではありますが、学生実行委員の皆さん、競技紹介のＣＧ映像やホームページ・ポスターなどを担当してくれた皆さん、またその指導に当たって頂いた先生方、キャッチフレーズやＴシャツデザインに応募してくれた学生の皆さん、協賛企業・会場関係者の皆様など、開催にあたりご尽力頂く全ての方々に深く感謝申し上げます。
              </p>
            </div>
          </section>
          <section className="msg-item item2">
            <div className="msg-img stu"></div>
            <div className="msg-text">
              <h3>実行委員長：清水　愛斗</h3>
              <p>
                スポーツフェスティバル実行委員会委員長の清水愛斗です。現在、日本電子に在学しているほとんどの学生は、日本電子のスポフェス初体験です。前例がなくアドバイスも聞けず大変だと思います。ですが、裏を返せば一から作り上げられるという風にもとれます。学生全員が全力で楽しみ、走りきる。今年から日本電子専門学校のスポフェスは変わります。感染症も終息しつつある今、私たち若者が新しい風を吹かします。
              </p>
            </div>
          </section>
        </section>
        <section className="qs">
          <h2>よくある質問</h2>
          <ul>
            <li>
              <Link href="/access">
                <a>
                  <em>アクセス</em>
                  が知りたい
                </a>
              </Link>
            </li>
            <li>
              <Link href="memory">
                <a>
                  <em>思い出</em>
                  を残したい
                </a>
              </Link>
            </li>
            <li>
              <Link href="/attention">
                <a>
                  <em>不安</em>
                  がある
                </a>
              </Link>
            </li>
            <li>
              <a>
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
