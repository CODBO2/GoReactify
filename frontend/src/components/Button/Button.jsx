import React from 'react';
import styles from './Button.module.css';

export default function Button({
  children,
  icon,
  type = 'button',
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${icon ? styles.iconButton : ''} ${className}`.trim()}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
} 