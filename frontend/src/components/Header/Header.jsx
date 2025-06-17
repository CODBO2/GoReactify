import React from "react";
import styles from "./Header.module.css";

export default function Header({ links = [] }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            className={styles.link}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
} 