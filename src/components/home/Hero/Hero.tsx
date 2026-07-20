import React, { useRef, useEffect, useState } from 'react';
import styles from './Hero.module.css';
import { Button } from '../../ui/Button/Button';
import { DonutShowcase } from '../DonutShowcase/DonutShowcase';
import { DonutSelector } from '../DonutSelector/DonutSelector';
import { Donut } from '../../../types';

interface HeroProps {
  donut: Donut;
  onSelectDonut: (donut: Donut) => void;
}

export const Hero = ({ donut, onSelectDonut }: HeroProps) => {
  const titleWords = donut.title.split(' ');
  const visualRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // Check on initial mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSelectDonut = (selected: Donut) => {
    onSelectDonut(selected);
    if (isMobile && visualRef.current) {
      // Scroll so the big donut sits nicely in the center of the mobile screen
      setTimeout(() => {
        visualRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    }
  };

  return (
    <main className={styles.hero}>
      <div key={donut.id} className={styles.content}>
        <h1 className={styles.title} aria-label={donut.title}>
          {titleWords.map((word, index) => (
            <span key={index} className={styles.wordWrapper} aria-hidden="true">
              <span 
                className={styles.wordInner} 
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>
        <p className={styles.description}>{donut.description}</p>
        
        <div className={styles.actions}>
          <Button variant="primary">Order Now</Button>
          <Button variant="outline">View Menu</Button>
        </div>

        <DonutSelector selectedDonut={donut} onSelectDonut={handleSelectDonut} />
      </div>

      <div className={styles.visual} ref={visualRef}>
        <DonutShowcase donut={donut} />
      </div>
    </main>
  );
};
