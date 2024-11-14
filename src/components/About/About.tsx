"use client";
import { aboutData } from "@/db/main";
import { motion } from "framer-motion";
import styles from "../../styles/components/About.module.scss";
import Timeline from "./Timeline";

const About = () => {
  return (
    <div className={styles.about} id="about">
      <h2 className={styles.about_title}>{aboutData.title}</h2>
      <div className={styles.about_container}>
        <motion.div 
          className={styles.about_content}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {aboutData.content.map((paragraph, index) => (
            <p key={index} className={styles.about_text}>
              {paragraph}
            </p>
          ))}
        </motion.div>
        
        <motion.div 
          className={styles.about_timeline}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Timeline />
        </motion.div>
      </div>
      <div className={styles.about_circle1}></div>
    </div>
  );
};

export default About;
