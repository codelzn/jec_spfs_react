import type { NextPage } from 'next';
import Link from 'next/link';
import styles from './hamMenu.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';

type hamDataType = {
  id: number;
  name: string;
  href: string;
};

const HamMenu: NextPage = () => {
  const hamData: hamDataType[] = [
    {
      id: 1,
      name: 'Home',
      href: '/',
    },
    {
      id: 2,
      name: '開催情報',
      href: '/venue',
    },
    {
      id: 3,
      name: '競技情報',
      href: '/competition',
    },
    {
      id: 4,
      name: '注意事項',
      href: '/attention',
    },
    {
      id: 5,
      name: 'アクセス',
      href: '/access',
    },
    {
      id: 6,
      name: '思い出',
      href: '/memory',
    },
  ];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isActive = isOpen ? 'active' : '';
  const handleClick = () => setIsOpen(isOpen ? false : true);
  // 今どこにいるかを取得する
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <div className={styles.ham_menu}>
      <aside className="hamcontainer">
        <div className={`burger ${isActive}`} onClick={handleClick}>
          <span className="line top"></span>
          <span className="line middle"></span>
          <span className="line bottom"></span>
        </div>
        <nav className={`burger-content ${isActive}`}>
          <ul className={isActive}>
            {hamData.map(ham => (
              <li key={ham.id} onClick={handleClick}>
                <Link href={ham.href}>
                  <a className={currentPath === ham.href ? 'active' : ''}>
                    {ham.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default HamMenu;
