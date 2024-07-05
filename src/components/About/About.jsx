import React from "react";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
       
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.reactIcon} >
          <FaReact size={70} />
          </div>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <div className={styles.backendIcon} > 
          <FaNodeJs size={70} />
         </div>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Learning to develop fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.designIcon} > 
           <FaFigma size={70} />
           </div>
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
