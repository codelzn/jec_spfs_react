import type { NextPage } from 'next';
import styles from './footerCom.module.scss';

const FooterCom: NextPage = () => {
  return (
    <footer className={styles.footcontainer}>
      <div className="totop">
        <a href="#">
          <picture>
            <img src="/images/totop.svg" alt="トップへ戻る" />
          </picture>
        </a>
      </div>
      <p>
        <small>&copy;2022 Japan Electronics College</small>
      </p>
    </footer>
  );
};

export default FooterCom;
