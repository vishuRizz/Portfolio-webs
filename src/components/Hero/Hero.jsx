import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vishu</h1>
        <p className={styles.description}>
          I'm a full-stack developer, using React and
          NodeJS. <br/> Reach out if you'd like to learn more!
        </p>
        <a href="https://www.linkedin.com/in/vishu-pratap-soft-dev/" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
     
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
