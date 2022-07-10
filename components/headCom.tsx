import type { NextPage } from 'next';
import Link from 'next/link';
import styles from './headCom.module.scss';

const HeadCom: NextPage = () => {
  return (
    <header className={styles.headcontainer}>
      <h1>
        <Link href="/">
          <img src="/images/logo_small.png" alt="" className="logo" />
        </Link>
      </h1>
    </header>
  );
};

export default HeadCom;
