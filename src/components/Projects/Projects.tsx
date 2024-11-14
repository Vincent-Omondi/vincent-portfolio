"use client";
import { ProjectsData } from "@/db/main";
import React from "react";
import styles from "../../styles/components/Projects.module.scss";
import Project from "./Project";
import { logEvent, getAnalytics } from 'firebase/analytics';

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div id="projects" className={`${styles.projects}`}>
      <h2 className={`${styles.projects_title}`}>{ProjectsData.title}</h2>
      <p className={`${styles.projects_subtitle}`}>
        Here&apos;s a selection of my highlighted projects. Have a project in mind? Let&apos;s have a{' '}
        <a 
          href="mailto:vincentomondi1002@gmail.com" 
          onClick={() => {
            logEvent(getAnalytics(), 'Contact Email Click');
          }}
        >
          conversation.
        </a>
      </p>
      <div className={`${styles.projects_container}`}>
        {ProjectsData.Projects.map((project, i) => (
          <Project key={i} index={i} data={{ ...project, codeUrl: project.codeUrl || '' }} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
