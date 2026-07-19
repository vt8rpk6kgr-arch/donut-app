'use client';

import React, { useState } from 'react';
import styles from './Header.module.css';
import { Button } from '../../ui/Button/Button';
import Image from 'next/image';
import Link from 'next/link';
import { Donut } from '../../../types';

interface HeaderProps {
  donut: Donut;
}

export const Header = ({ donut }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src="/assets/logo.png" alt="Donut Logo" width={70} height={70} className={styles.logoIcon} />
        Donut
      </Link>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Menu</Link>
        <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Our Story</Link>
        <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Reviews</Link>
      </nav>

      <div className={styles.actions}>
        <div className={styles.headerBtn}>
          <Button variant="nav">Order Now</Button>
        </div>
        
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};
