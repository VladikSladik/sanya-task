import { Link } from 'react-router-dom';

import HeaderLogo from '@/assets/icons/header_logo.svg';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header-container']}>
        <Link to="/" className={styles['header-logo']}>
          <img src={HeaderLogo} alt="Rick and Morty Logo" />
        </Link>
        <nav className={styles['header-nav']}>
          <Link to="/" className={styles['nav-link']}>
            Characters
          </Link>
        </nav>
      </div>
    </header>
  );
};
