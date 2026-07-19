import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'nav';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const baseClass = styles.button;
  const variantClass = styles[variant];
  
  return (
    <button 
      className={`${baseClass} ${variantClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
