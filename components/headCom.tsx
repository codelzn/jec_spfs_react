import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './headCom.module.scss';

type Props = {
  bgc?: 'white' | 'yellow' | 'green';
};

const HeadCom = ({ bgc = 'white' }: Props): JSX.Element => {
  return (
    <header className={`${styles.headcontainer} ${styles[bgc]}`}>
      <h1>
        <Link href="/">
          <picture>
            <img src="/images/logo_small.png" alt="" className="logo" />
          </picture>
        </Link>
      </h1>
    </header>
  );
};

export default HeadCom;
