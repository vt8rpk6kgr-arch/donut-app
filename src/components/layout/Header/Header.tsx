import React from 'react';
import styles from './Header.module.css';
import { Button } from '../../ui/Button/Button';
import Image from 'next/image';
import Link from 'next/link';
import { Donut } from '../../../types';

interface HeaderProps {
  donut: Donut;
}

export const Header = ({ donut }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src="/assets/logo.png" alt="Donut Logo" width={70} height={70} className={styles.logoIcon} />
        Donut
      </Link>

      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/menu" className={styles.navLink}>Menu</Link>
        <Link href="/story" className={styles.navLink}>Our Story</Link>
        <Link href="/reviews" className={styles.navLink}>Reviews</Link>
      </nav>

      <Button variant="nav">
        Order Now
      </Button>
    </header>
  );
};
