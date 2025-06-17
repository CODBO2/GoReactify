import React from 'react';
import styles from './Row.module.css';

export default function Row({
  children,
  className = '',
  style = {},
  ...props
}) {
  return (
    <div
      className={`${styles.row} ${className}`.trim()}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
} 