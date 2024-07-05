import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        
          <a href="mailto:vishurizz0@gmail.com">My Gmail</a>
        </li>
        <li className={styles.link}>
          
          <a href="https://www.linkedin.com/in/vishu-pratap-soft-dev">My LinkedIn profile</a>
        </li>
        <li className={styles.link}>
          
          <a href="https://https://github.com/vishuRizz">My github profile</a>
        </li>
      </ul>
    </footer>
  );
};
