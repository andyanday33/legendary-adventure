import React from "react";
import styles from "@/styles/404.module.scss";
import Head from "next/head";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.notFound}>
        <h1>404</h1>
        <p>The page you are looking for is not found.</p>
      </div>
    </>
  );
};

export default NotFound;
