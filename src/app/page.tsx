'use client';

import { useState, useEffect } from 'react';
import { Header } from '../components/layout/Header/Header';
import { Hero } from '../components/home/Hero/Hero';
import { donutsList } from '../data/donuts';
import { Donut } from '../types';

export default function Home() {
  const [selectedDonut, setSelectedDonut] = useState<Donut>(donutsList[0]);

  // Handle dynamic CSS variables
  useEffect(() => {
    document.documentElement.style.setProperty('--theme-bg', selectedDonut.themeColor);
    document.documentElement.style.setProperty('--theme-accent', selectedDonut.accentColor);
  }, [selectedDonut]);

  return (
    <>
      <Header donut={selectedDonut} />
      <Hero donut={selectedDonut} onSelectDonut={setSelectedDonut} />
    </>
  );
}
