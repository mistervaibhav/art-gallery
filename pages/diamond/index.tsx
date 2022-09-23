import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/diamond.module.css";

const Diamond: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Diamond</title>
      </Head>

      <div className={styles.diamond}>
        <span className={styles.first_span}></span>
        <span className={styles.second_span}></span>
        <span className={styles.third_span}></span>
        <span className={styles.forth_span}></span>
      </div>
    </div>
  );
};

export default Diamond;
