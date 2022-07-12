import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import styles from '../styles/Competition.module.scss';
import HeadCom from '../components/headCom';
import { useEffect } from 'react';

const Competition: NextPage = () => {
  const openDialog = () => {
    const lis: NodeListOf<HTMLElement> =
      document.querySelectorAll('main ul li');
    lis.forEach(li => {
      li.children[1] &&
        li.children[0].addEventListener('click', e => {
          e.stopPropagation();
          const dialog = li.children[1] as HTMLElement;
          dialog.classList.toggle('active');
          dialog.querySelector('.close')?.addEventListener('click', e => {
            e.stopPropagation();
            dialog.className = 'dialog';
          });
        });
    });
  };
  useEffect(() => {
    openDialog();
  }, []);
  return (
    <div className={styles.competitioncontainer}>
      <Head>
        <title key="title">
          競技情報｜第26回スポーツフェスティバル｜日本電子専門学校
        </title>
      </Head>
      <HeadCom bgc="yellow" />
      <main>
        <h2>競技情報</h2>
        <section className="mainSp">
          <h3>メイン種目</h3>
          <ul>
            <li>
              <figure>
                <img src="../images/sport/sp1.png" alt="大玉送り" />
                <figcaption>
                  <a>大玉送り</a>
                </figcaption>
              </figure>
              <div className="dialog">
                <div className="content">
                  <h4>大玉送り</h4>
                  <p>
                    大玉を各色全員で頭上で運びながらトラックを一周
                    する競技です。参加人数は多いけれどトラックすべ
                    てをカバーできません。空いているところは急いで助
                    けに向かいましょう！
                  </p>
                  <p className="close"></p>
                </div>
              </div>
            </li>
            <li>
              <figure>
                <img src="../images/sport/sp2.png" alt="玉入れ" />
                <figcaption>
                  <a>玉入れ</a>
                </figcaption>
              </figure>
              <div className="dialog">
                <div className="content">
                  <h4>玉入れ</h4>
                  <p>
                    自分の色のかごにその色の色玉を入れ、その総数で競う競技です。ただし、かごの中にその色と違う色の玉が入っていた場合減点となります。
                  </p>
                  <p className="close"></p>
                </div>
              </div>
            </li>
            <li>
              <figure>
                <img
                  src="../images/sport/sp3.png"
                  alt="電子学園ウルトラクイズ"
                />
                <figcaption>
                  <a>
                    電子学園
                    <br />
                    ウルトラ クイズ
                  </a>
                </figcaption>
              </figure>
              <div className="dialog">
                <div className="content">
                  <h4 className='over'>電子学園<br />ウルトラクイズ</h4>
                  <p>
                    日本電子に関係するクイズが〇×形式で出題されま
                    す。全員参加できるので気軽に参加してみましょう！
                  </p>
                  <p className="close"></p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="attractions">
          <h3>アトラクション種目</h3>
          <ul>
            <li>
              <a>ストラックアウト</a>
              <div className="dialog">
                <div className="content">
                  <h4>ストラックアウト</h4>
                  <p>
                    ホームベース上に設置されたストラックボードにマウ
                    ンドからボールを投げ、当てた的の数を競う競技で
                    す。一人五球、制限時間は二分間です。
                  </p>
                  <p className="close"></p>
                </div>
              </div>
            </li>
            <li>
              <a>スピードガン</a>
              <div className="dialog">
                <div className="content">
                  <h4>スピードガン</h4>
                  <p>
                    ホームベース前に設置されるスピードガンに向かって
                    ボールを投げ、その投速を競う競技です。一人二球
                    ずつで速かったほうが選手の記録となります。
                  </p>
                  <p className="close"></p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="side">
          <h3>サイド種目</h3>
          <ul>
            <li>
              <a>筋肉系種目</a>
            </li>
            <li>
              <a>体力測定種目</a>
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

export default Competition;
