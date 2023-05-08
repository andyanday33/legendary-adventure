import React from "react";
import styles from "@/styles/Hero.module.scss";

type Props = {};

export const Hero = (props: Props) => {
  return (
    <>
      <h1 className={styles.title}>
        <span className={styles.primary}>const</span> rubber{" "}
        <span className={styles.primary}>=</span>{" "}
        <span className={styles.accent}>{"{"}</span> <br />
        <span className={styles.dark}>|{"   "}</span>
        <span className={styles.property}>
          duck
          <span className={styles.detail}>:</span>
        </span>{" "}
        console
        <span className={styles.primary}>.</span>log
        <span className={styles.detail}>,</span>
        <br />
        <span className={styles.accent}>{"}"}</span>
        <span className={styles.detail}>;</span>
      </h1>
      <h1 className={styles.title + " " + styles.smallScreenOnly}>
        rubber<span className={styles.primary}>.</span>
        <span className={styles.accent}>duck{"("}</span>
        <span className={styles.detail}>{"`"}</span>
      </h1>
      <div className={styles.consoleLog}>
        <h1 className={styles.title + " " + styles.bigScreenOnly}>
          rubber<span className={styles.primary}>.</span>
          <span className={styles.accent}>duck{"("}</span>
          <span className={styles.detail}>{'"'}</span>
        </h1>

        <div className={styles.textContent}>
          <span className={styles.greeting + " " + styles.en}>
            Welcome to Berke&apos;s Domain
          </span>
        </div>
        <h1
          className={
            styles.closure + " " + styles.title + " " + styles.bigScreenOnly
          }
        >
          <span className={styles.detail}>{'"'}</span>

          <span className={styles.accent}>{")"}</span>
          <span className={styles.detail}>;</span>
        </h1>
      </div>
      <h1
        className={
          styles.closure + " " + styles.title + " " + styles.smallScreenOnly
        }
      >
        <span className={styles.detail}>{"`"}</span>

        <span className={styles.accent}>{")"}</span>
        <span className={styles.detail}>;</span>
      </h1>
    </>
  );
};
