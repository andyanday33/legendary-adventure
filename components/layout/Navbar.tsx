import Link from "next/link";
import React from "react";

type Props = {
  className: string;
};

export const Navbar: React.FC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <Link href="/">Home</Link>
      <Link href="/about">Projects</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/x">Resume</Link>
      <section>
        <a>T</a>
        <a>G</a>
        <a>X</a>
      </section>
    </header>
  );
};
