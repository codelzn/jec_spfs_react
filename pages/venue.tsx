import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Venue.module.scss';
import HeadCom from '../components/headCom';
import React, { useState } from 'react';

const Venue: NextPage = () => {
  // まずは午前を表示する、falseの場合は午後を表示する
  const [activeCon, setActiveCon] = useState<boolean>(true);
  const contChange = () => {
    setActiveCon(!activeCon);
  };
  return (
    <div className={styles.venuecontainer}>
      <Head>
        <title key="title">
          開催情報｜第26回スポーツフェスティバル｜日本電子専門学校
        </title>
      </Head>
      <HeadCom bgc="yellow" />
      <main>
        <h2>開催情報</h2>
        <section className="maintime">
          <table>
            <thead>
              <tr>
                <th colSpan={2}>全体予定表</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>学生入場開始</td>
                <td>9 : 00(14 : 00)</td>
              </tr>
              <tr>
                <td>開会式</td>
                <td>10 : 00(15 : 00)</td>
              </tr>
              <tr>
                <td>準備運動</td>
                <td>10 : 10(15 : 10)</td>
              </tr>
              <tr>
                <td>競技開始</td>
                <td>10 : 40(15 : 40)</td>
              </tr>
              <tr>
                <td>競技終了</td>
                <td>11 : 50(16 : 50)</td>
              </tr>
              <tr>
                <td>退場</td>
                <td>12 : 00(17 : 00)</td>
              </tr>
            </tbody>
          </table>
        </section>
        <aside className="switchbar">
          <ul>
            <li onClick={() => setActiveCon(true)}>午前</li>
            <li onClick={() => setActiveCon(false)}>午後</li>
          </ul>
        </aside>
        <div className="outside">
          <div className={`movebox ${activeCon ? '' : 'active'}`}>
            <article
              className={`content content1 ${activeCon ? 'active' : ''}`}
            >
              <section className="maincontent">
                <section className="time2">
                  <h3>色別入場時間</h3>
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
              </section>
            </article>
            <article
              className={`content content2 ${activeCon ? '' : 'active'}`}
            >
              <section className="maincontent">
                <section className="time2">
                  <h3>色別入場時間</h3>
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
              </section>
            </article>
          </div>
        </div>
        <div className="tonext">
          <Link href="/attention">
            <a>注意事項</a>
          </Link>
        </div>
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
