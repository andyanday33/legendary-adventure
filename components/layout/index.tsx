import React from "react";
import styles from "@/styles/Layout.module.scss";
import { Navbar } from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar className={styles.navbar} />
      <main className={styles.main}>{children}</main>
      <footer>Footer</footer>
    </>
  );
};
