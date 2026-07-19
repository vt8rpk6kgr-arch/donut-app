import React from 'react';
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
  // Split title if it contains two words to stack them nicely as in the design
  const titleWords = donut.title.split(' ');

  return (
    <main className={styles.hero}>
      <div key={donut.id} className={styles.content}>
        <h1 className={styles.title}>
          {titleWords.map((word, index) => (
            <React.Fragment key={index}>
              {word}
              <br />
            </React.Fragment>
          ))}
        </h1>
        <p className={styles.description}>{donut.description}</p>
        
        <div className={styles.actions}>
          <Button variant="primary">Order Now</Button>
          <Button variant="outline">View Menu</Button>
        </div>

        <DonutSelector selectedDonut={donut} onSelectDonut={onSelectDonut} />
      </div>

      <div className={styles.visual}>
        <DonutShowcase donut={donut} />
      </div>
    </main>
  );
};
