import React from "react";
import styles from "@/styles/Posts.module.scss";
import Head from "next/head";

type Props = {};

export default function Posts(props: Props) {
  return (
    <>
      <Head>
        <title>Berke&apos;s Posts</title>
        <meta name="description" content="Berke Anday Baloğlu's posts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.posts}>
        <h1>/Posts</h1>
        <p>Coming soon...</p>
      </div>
    </>
  );
}
