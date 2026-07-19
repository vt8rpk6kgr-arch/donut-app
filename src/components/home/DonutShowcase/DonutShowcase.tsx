import React from 'react';
import styles from './DonutShowcase.module.css';
import Image from 'next/image';
import { Donut } from '../../../types';

interface DonutShowcaseProps {
  donut: Donut;
}

export const DonutShowcase = ({ donut }: DonutShowcaseProps) => {
  return (
    <div key={donut.id} className={styles.showcaseContainer} aria-hidden="true">
      <div className={styles.mainDonutWrapper}>
        <div className={styles.mainDonutInner}>
          <Image 
            src={donut.image} 
            alt={donut.title}
            width={500}
            height={500}
            className={styles.mainDonutImage}
            priority
          />
        </div>
      </div>
      <div className={styles.shadow}></div>

      {donut.floatingDecorations.map((element) => (
        <Image
          key={`${donut.id}-${element.id}`}
          src={element.src}
          alt={element.alt}
          width={60}
          height={60}
          className={`${styles.floatingElement} ${styles[element.animationClass]}`}
          style={{ 
            top: element.initialPosition.top, 
            left: element.initialPosition.left 
          }}
        />
      ))}
    </div>
  );
};
