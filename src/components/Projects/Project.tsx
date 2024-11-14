"use client";
import { analytics } from "@/firebase/config";
import { Icon } from "@iconify/react";
import { getAnalytics, logEvent } from "firebase/analytics";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { memo } from "react";
import styles from "../../styles/components/Projects.module.scss";

type ProjectProps = {
  data: {
    name: string;
    image: StaticImageData;
    technologies: string[];
    description: string;
    demoUrl?: string;
    codeUrl: string;
  };
  index: number;
};

const Project: React.FC<ProjectProps> = memo(({ data, index }) => {
  return (
    <motion.div
      className={styles.projects_container_project}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className={styles.projects_container_project_left}>
        <div className={styles.projects_container_project_left_imgContainer}>
          <Image 
            src={data.image} 
            alt={data.name} 
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
            className={styles.projects_container_project_left_imgContainer_image}
            width={800}
            height={450}
          />
        </div>
      </div>
      <div className={styles.projects_container_project_right}>
        <h3 className={styles.projects_container_project_right_name}>
          {data.name}
        </h3>
        <div className={styles.projects_container_project_right_techContainer}>
          <div className={styles.projects_container_project_right_techContainer_tech_made}>
            Made with:
          </div>
          {data.technologies.map((tech, i) => (
            <div className={styles.projects_container_project_right_techContainer_tech} key={i}>
              {tech}
            </div>
          ))}
        </div>
        <p className={styles.projects_container_project_right_description}>
          {data.description}
        </p>
        <div className={styles.projects_container_project_right_buttons}>
          {data.demoUrl && (
            <a
              onClick={() => {
                logEvent(getAnalytics(), `${data.name} Live`);
              }}
              className={styles.projects_container_project_right_buttons_btn}
              href={data.demoUrl}
              target="_blank"
            >
              <Icon icon={"ph:arrow-square-out-light"} />
              Live
            </a>
          )}
          {data.codeUrl && (
            <a
              onClick={() => {
                logEvent(getAnalytics(), `${data.name} Code`);
              }}
              className={styles.projects_container_project_right_buttons_btn}
              href={data.codeUrl}
              target="_blank"
            >
              <Icon icon={"mdi:github"} />
              Code
            </a>
          )}
        </div>
      </div>
      <div
        className={`${styles.projects_container_project_circle} ${
          index % 2 === 0
            ? styles.projects_container_project_circle_down
            : styles.projects_container_project_circle_up
        }`}
      ></div>
    </motion.div>
  );
});

Project.displayName = 'Project';
export default Project;

