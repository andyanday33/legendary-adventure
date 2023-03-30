import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "@/styles/Navbar.module.scss";

type Props = {
  className: string;
};

export const Navbar: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const routes = {
    home: "/",
    projects: "/projects",
    posts: "/posts",
    resume: "/x",
  };

  return (
    <header className={styles.navbar}>
      <Link
        href={routes.home}
        className={currentRoute === routes.home ? styles.active : ""}
      >
        Home
      </Link>
      <Link
        href={routes.projects}
        className={currentRoute === routes.projects ? styles.active : ""}
      >
        Projects
      </Link>
      <Link
        href={routes.posts}
        className={currentRoute === routes.posts ? styles.active : ""}
      >
        Posts
      </Link>
      <Link href="/x">Resume</Link>
      <section>
        <a>T</a>
        <a>G</a>
        <a>X</a>
      </section>
    </header>
  );
};
