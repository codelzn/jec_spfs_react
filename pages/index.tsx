import type { GetStaticProps, NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
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
  useEffect(() => {
    videoHandler();
  }, []);
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
              <img src="/images/intro.jpg" alt="みんなの写真" />
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
          <video playsInline autoPlay muted loop ref={videoRef}></video>
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
