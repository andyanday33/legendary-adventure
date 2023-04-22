import React from "react";
import styles from "@/styles/404.module.scss";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>The page you are looking for is not found.</p>
    </div>
  );
};

export default NotFound;
