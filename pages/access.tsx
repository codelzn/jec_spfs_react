import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import HeadCom from '../components/headCom';
import styles from '../styles/Access.module.scss';

const Access: NextPage = () => {
  return (
    <div className={styles.accesscontainer}>
      <Head>
        <title key="title">
          アクセス｜第26回スポーツフェスティバル｜日本電子専門学校
        </title>
      </Head>
      <HeadCom bgc="yellow" />
      <main>
        <h2>アクセス</h2>
        <section className="syuugo">
          <h3>集合情報</h3>
          <p>
            会場：東京ドーム
            <br />
            東京都文京区後楽1-3-61
          </p>
          <p>入場：２２番ゲート</p>
          <div className="googlemap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3239.8365514739394!2d139.7518913!3d35.7056396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c4782eed4f3%3A0x5058b288249e640e!2z5p2x5Lqs44OJ44O844Og!5e0!3m2!1sja!2sjp!4v1657004181863!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </section>
        <section className="odoom">
          <h3>東京ドーム周辺図</h3>
          <picture>
            <img src="../images/map2.jpg" alt="東京ドーム周辺図" />
          </picture>
        </section>
        <section className="idoom">
          <h3>
            東京ドーム内野控室
            <br />
            見取り図
          </h3>
          <picture>
            <img src="../images/map3.jpg" alt="東京ドーム内野控室見取り図" />
          </picture>
        </section>
        <section className="eki">
          <h3>最寄り駅</h3>
          <dl>
            <dt>JR</dt>
            <dd>「水道橋駅」西口</dd>
            <dt>都営地下鉄 三田線</dt>
            <dd>「水道橋駅」A2出口</dd>
            <dt>東京メトロ</dt>
            <dt className="e">丸ノ内線・南北線</dt>
            <dd>「後楽園駅」2番出口</dd>
            <dt>都営地下鉄 大江戸線</dt>
            <dd>「春日駅」6番出口</dd>
          </dl>
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

export default Access;
