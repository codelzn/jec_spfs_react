import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './footerCom.module.scss';

const FooterCom: NextPage = () => {
  return (
    <footer className={styles.footcontainer}>
      <div className="totop">
        <a href="#">
          <Image layout='fill' src="/images/totop.svg" alt="トップへ戻る" />
        </a>
      </div>
      <p>
        <small>&copy;2022 Japan Electronics College</small>
      </p>
    </footer>
  );
};

export default FooterCom;
