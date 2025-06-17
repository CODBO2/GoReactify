import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import styles from "./layout.module.css";

export default function Layout({ links }) {
  return (
    <div className={styles.layoutRoot}>
      <Header links={links} />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
} 