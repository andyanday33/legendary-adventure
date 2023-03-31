import React from "react";
import styles from "@/styles/Layout.module.scss";
import { Navbar } from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <Navbar className={styles.navbar} />
      <main className={styles.main}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.section
            key={currentRoute}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.section>
        </AnimatePresence>
      </main>

      <footer>Footer</footer>
    </>
  );
};
