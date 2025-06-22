import React from "react";
import { useNavigate } from "react-router";
import Button from "../Button/Button.jsx";
import styles from "./Header.module.css";

export default function Header({ links = [] }) {
  const navigate = useNavigate();

  const handleNavigation = (url) => {
    if (url === "/") {
      localStorage.removeItem("token");
      navigate("/");
      return;
    }

    navigate(url);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {links.map((link, idx) => (
          <Button
            key={idx}
            onClick={() => handleNavigation(link.url)}
            className={styles.link}
          >
            {link.label}
          </Button>
        ))}
      </nav>
    </header>
  );
} 