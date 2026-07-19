import React from 'react';
import styles from './DonutSelector.module.css';
import Image from 'next/image';
import { Donut } from '../../../types';
import { donutsList } from '../../../data/donuts';

interface DonutSelectorProps {
  selectedDonut: Donut;
  onSelectDonut: (donut: Donut) => void;
}

export const DonutSelector = ({ selectedDonut, onSelectDonut }: DonutSelectorProps) => {
  return (
    <div className={styles.selectorContainer} role="group" aria-label="Select Donut Flavor">
      {donutsList.map((donut) => (
        <button
          key={donut.id}
          className={`${styles.thumbnailButton} ${selectedDonut.id === donut.id ? styles.active : ''}`}
          onClick={() => onSelectDonut(donut)}
          aria-label={`Select ${donut.title}`}
          aria-pressed={selectedDonut.id === donut.id}
        >
          <Image 
            src={donut.thumbnail} 
            alt={donut.title} 
            width={70} 
            height={70} 
            className={styles.thumbnailImage} 
          />
        </button>
      ))}
    </div>
  );
};
