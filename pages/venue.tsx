import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import styles from '../styles/Venue.module.scss';
import HeadCom from '../components/headCom';
import React, { useEffect, useState } from 'react';

const Venue: NextPage = () => {
  const [activeCon, setActiveCon] = useState<boolean>(false);
  const contChange = () => {
    setActiveCon(!activeCon);
  };
  return (
    <div className={`${styles.venuecontainer} ${activeCon ? styles.pm : ''}`}>
      <Head>
        <title key="title">
          開催情報｜第26回スポーツフェスティバル｜日本電子専門学校
        </title>
      </Head>
      <HeadCom bgc = { activeCon ? 'yellow' : 'green' } />
      <main>
        <article className={`content content1 ${activeCon ? 'active' : ''}`}>
          <section className="maincontent">
            <h2>開催情報(午前)</h2>
            <section className="time1">
              <h3>全体予定表</h3>
              <dl>
                <dt>9 : 00(14 : 00)</dt>
                <dd>学生入場開始</dd>
                <dt>10 : 00(15 : 00)</dt>
                <dd>開会式</dd>
                <dt>10 : 10(15 : 10)</dt>
                <dd>準備運動</dd>
                <dt>10 : 40(15 : 40)</dt>
                <dd>競技開始</dd>
                <dt>11 : 50(16 : 50)</dt>
                <dd>競技終了</dd>
                <dt>12 : 00(17 : 00)</dt>
                <dd>退場</dd>
              </dl>
            </section>
            <section className="time2">
              <h3>集合時間</h3>
              <ul>
                <li>
                  ９：００
                  <span>青チーム</span>
                </li>
                <li>
                  ９：１０
                  <span>白チーム</span>
                </li>
                <li>
                  ９：２０
                  <span>赤チーム</span>
                </li>
                <li>
                  ９：３０
                  <span>黄チーム</span>
                </li>
              </ul>
            </section>
            <section className="colorteam">
              <h3>色分け</h3>
              <section className="blue">
                <h4>青チーム</h4>
                <ul>
                  <li>Webデザイン科</li>
                  <li>ケイタイ·アプリケーション科</li>
                  <li>電子応用工学科</li>
                  <li>情報ビジネスライセンス科</li>
                  <li>電気工学科</li>
                  <li>高度電気工学科</li>
                </ul>
              </section>
              <section className="white">
                <h4>白チーム</h4>
                <ul>
                  <li>AIシステム科</li>
                  <li>情報システム開発科</li>
                </ul>
              </section>
              <section className="red">
                <h4>赤チーム</h4>
                <ul>
                  <li>情報処理科</li>
                </ul>
              </section>
              <section className="yellow">
                <h4>黄チーム</h4>
                <ul>
                  <li>ネットセキュリティ科</li>
                  <li>高度情報処理科</li>
                  <li>電気工事技術科</li>
                </ul>
              </section>
            </section>
            <div className="tonext">
              <a href="../notice/index.html">注意事項</a>
            </div>
          </section>
          <section className="toam"></section>
        </article>
        <article className={`content content2 ${activeCon ? '' : 'active'}`}>
          <section className="topm"></section>
          <section className="maincontent">
            <h2>開催情報(午後)</h2>
            <section className="time1">
              <h3>全体予定表</h3>
              <dl>
                <dt>9 : 00(14 : 00)</dt>
                <dd>学生入場開始</dd>
                <dt>10 : 00(15 : 00)</dt>
                <dd>開会式</dd>
                <dt>10 : 10(15 : 10)</dt>
                <dd>準備運動</dd>
                <dt>10 : 40(15 : 40)</dt>
                <dd>競技開始</dd>
                <dt>11 : 50(16 : 50)</dt>
                <dd>競技終了</dd>
                <dt>12 : 00(17 : 00)</dt>
                <dd>退場</dd>
              </dl>
            </section>
            <section className="time2">
              <h3>集合時間</h3>
              <ul>
                <li>
                  １３：３０
                  <span>青チーム</span>
                </li>

                <li>
                  １３：４０
                  <span>白チーム</span>
                </li>

                <li>
                  １３：５０
                  <span>赤チーム</span>
                </li>

                <li>
                  １４：００
                  <span>黄チーム</span>
                </li>
              </ul>
            </section>
            <section className="colorteam">
              <h3>色分け</h3>
              <section className="blue">
                <h4>青チーム</h4>
                <ul>
                  <li>アニメーション科</li>
                  <li>アニメーション研究科</li>
                  <li>コンピュータグラッフィックス研究科</li>
                  <li>CG映画製作科</li>
                </ul>
              </section>
              <section className="white">
                <h4>白チーム</h4>
                <ul>
                  <li>コンピュータグラッフィックス科</li>
                  <li>グラッフィックデザイン科</li>
                </ul>
              </section>
              <section className="red">
                <h4>赤チーム</h4>
                <ul>
                  <li>ゲーム製作科</li>
                </ul>
              </section>
              <section className="yellow">
                <h4>黄チーム</h4>
                <ul>
                  <li>ゲーム企画科</li>
                  <li>ゲーム製作研究科</li>
                </ul>
              </section>
            </section>
            <div className="tonext">
              <a href="../notice/index.html">注意事項</a>
            </div>
          </section>
        </article>
        <aside
          onClick={contChange}
          className={`changeTime ${activeCon ? '' : 'active'}`}
        >
          <p>午 {activeCon ? '後' : '前'} は こ ち ら で す よ ！</p>
        </aside>
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

export default Venue;
