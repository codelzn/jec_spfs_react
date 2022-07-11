import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './headCom.module.scss';

type Props = {
  bgc?: string;
};

const HeadCom = ({ bgc = 'yellow' }: Props): JSX.Element => {
  return (
    <header
      className={`${styles.headcontainer} ${
        bgc === 'yellow' ? styles.yellow : styles.green
      }`}
    >
      <h1>
        <Link href="/">
          <img src="/images/logo_small.png" alt="" className="logo" />
        </Link>
      </h1>
    </header>
  );
};

export default HeadCom;
