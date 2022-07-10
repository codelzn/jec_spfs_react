import type { NextPage } from 'next';
import Link from 'next/link';
import styles from './headCom.module.scss';

const HeadCom: NextPage = () => {
  return (
    <header className={styles.headcontainer}>
      <h1>
        <img src="/images/logo_small.png" alt="" className="logo" />
      </h1>
    </header>
  );
};

export default HeadCom;
