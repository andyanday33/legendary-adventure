import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "@/styles/Navbar.module.scss";
import { SiGithub, SiLinkedin } from "react-icons/si";

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
      <section className={styles.socials}>
        <a href="https://www.github.com/andyanday33" target="_blank">
          <SiGithub />
          <span>Github</span>
        </a>
        <a href="https://www.linkedin.com/in/berkeanday" target="_blank">
          <SiLinkedin />
          <span>LinkedIn</span>
        </a>
      </section>
    </header>
  );
};
