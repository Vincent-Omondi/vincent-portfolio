"use client";
import { Icon } from "@iconify/react";
import { getAnalytics, logEvent } from "firebase/analytics";
import { motion } from "framer-motion";
import React from "react";
import styles from "../../styles/Layout/MainLayout.module.scss";

type LinksProps = {};

const containerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {},
  },
  jump: {
    y: -10,
    transition: {
      type: "spring",
      stiffness: 200,
      dumping: 8,
    },
  },
};

const lineVariants = {
  hidden: {
    opacity: 0,
    height: "0",
  },
  visible: {
    opacity: 1,
    height: "15rem",
    transition: {},
  },
};

const Links: React.FC<LinksProps> = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`${styles.links}`}
    >
      <motion.a
        variants={childVariants}
        className={`${styles.links_link}`}
        href="mailto:vincentomondi1002@gmail.com"
        target="_blank"
        aria-label="email"
        onClick={() => {
          logEvent(getAnalytics(), `Email Side Links`);
        }}
      >
        <Icon className={`${styles.links_link_icon}`} icon={"mi:email"} />
      </motion.a>
      <motion.a
        variants={childVariants}
        className={`${styles.links_link}`}
        href="https://www.linkedin.com/in/vincent-omondi/"
        target="_blank"
        aria-label="linkedin"
        onClick={() => {
          logEvent(getAnalytics(), `LinkedIn Side Links`);
        }}
      >
        <Icon className={`${styles.links_link_icon}`} icon={"mdi:linkedin"} />
      </motion.a>
      <motion.a
        variants={childVariants}
        className={`${styles.links_link}`}
        href="https://github.com/Vincent-Omondi"
        target="_blank"
        aria-label="github"
        onClick={() => {
          logEvent(getAnalytics(), `Github Side Links`);
        }}
      >
        <Icon className={`${styles.links_link_icon}`} icon={"mdi:github"} />
      </motion.a>
      <motion.div
        variants={lineVariants}
        className={`${styles.links_line}`}
      ></motion.div>
    </motion.div>
  );
};

export default Links;
