"use client";
import { heroData } from "@/db/main";
import { Icon } from "@iconify/react";
import { getAnalytics, logEvent } from "firebase/analytics";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import styles from "../../styles/components/Hero.module.scss";
import UI from "../../styles/components/UI.module.scss";
import myImage from "../../../public/images/vincent.png";

type HeroProps = {};
const aniTime = 2;
const delayTime = 1.5;
const times = [0, 0.5, 0.55, 1, 1];
const containerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
};
const circleVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: [0, 1, 1, 1, 1],
    transition: {
      duration: aniTime,
      times: times,
      delay: delayTime,
    },
  },
};
const imgContainerVariants = {
  hidden: {
    rotate: 0,
    opacity: 0,
  },
  visible: {
    rotate: [-10, -10, -10, -10, -10],
    opacity: [0, 0, 1, 1, 1],
    borderWidth: [0, 1, 3, 3, 3],
    x: ["0rem", "0rem", "0rem", "-2rem", "-2rem"],
    y: ["0rem", "0rem", "0rem", "-1.5rem", "-1.5rem"],
    transition: {
      duration: aniTime,
      times: times,
      delay: delayTime,
    },
  },
};
const imageVariants = {
  hidden: {
    rotate: 0,
    opacity: 0,
    y: "100%",
  },
  visible: {
    rotate: [0, 0, 0, 10, 10],
    opacity: [0, 0, 0, 1, 1],
    y: ["100%", "100%", "100%", "5%", "5%"],
    transition: {
      duration: aniTime,
      times: times,
      delay: delayTime,
      ease: "easeInOut",
    },
  },
};
const backgroundVariants = {
  hidden: {
    opacity: 0,
    rotate: 0,
  },
  visible: {
    opacity: [0, 0, 0, 1, 1],
    rotate: [-10, -10, -10, -10, -10],

    transition: {
      duration: aniTime,
      times: times,
      delay: delayTime,
    },
  },
};
///text variants
const mainContainerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: delayTime + 0.5,
    },
  },
};
const textContainerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const textChildrenVariants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const arrowVariants = {
  start: {
    y: 0,
  },
  end: {
    y: [-5, 5, -5],
    transition: {
      y: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    },
  },
};
const scrollVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: delayTime,
    },
  },
};
const Hero: React.FC<HeroProps> = () => {
  return (
    <div className={`${styles.hero}`} id="hero">
      <div className={`${styles.hero_left}`}>
        <motion.div
          variants={mainContainerVariants}
          initial="hidden"
          animate="visible"
          className={`${styles.hero_left_container}`}
        >
          <div className={`${styles.hero_left_container_text}`}>
            <motion.span
              variants={textChildrenVariants}
              className={`${UI.lightText}`}
            >
              {heroData.title}
            </motion.span>
            <motion.span
              variants={textChildrenVariants}
              className={`${UI.boldText}`}
            >
              {heroData.subtitle}
            </motion.span>
            <motion.span
              variants={textChildrenVariants}
              className={`${UI.normalText}`}
            >
              {heroData.description[0]}
            </motion.span>
            <motion.span
              variants={textChildrenVariants}
              className={`${UI.importantText}`}
            >
              {heroData.description[1]}
            </motion.span>
          </div>
          <motion.div
            variants={textChildrenVariants}
            whileHover={{
              boxShadow: "0.7rem 0.7rem 0px var(--secondary)",
              transform: "translate(-0.7rem, -0.7rem)",
            }}
            className={`${styles.hero_left_container_btn}`}
          >
            <Link
              to="projects"
              smooth={true}
              duration={800}
              offset={-50}
              onClick={() => {
                logEvent(getAnalytics(), `Projects hero`);
              }}
            >
              {heroData.btnText}
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          className={`${styles.hero_left_circle}`}
        ></motion.div>
      </div>
      <div className={`${styles.hero_right}`}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`${styles.hero_right_container}`}
        >
          <motion.div
            variants={circleVariants}
            className={`${styles.hero_right_container_circle}`}
          ></motion.div>
          <motion.div
            variants={imgContainerVariants}
            className={`${styles.hero_right_container_imgContainer}`}
          >
            <div className={`${styles.orbital_ring} ${styles.ring1}`}></div>
            <div className={`${styles.orbital_ring} ${styles.ring2}`}></div>
            <div className={`${styles.orbital_ring} ${styles.ring3}`}></div>
            <div className={`${styles.orbital_ring} ${styles.ring4}`}></div>
            <div className={`${styles.hero_right_container_imgContainer_wrapper}`}>
              <Image
                className={`${styles.hero_right_container_imgContainer_image}`}
                src={myImage}
                alt={"Vincent's image"}
                priority
              />
            </div>
          </motion.div>
          <motion.div
            variants={backgroundVariants}
            className={`${styles.hero_right_container_background}`}
          ></motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={scrollVariants}
        initial="hidden"
        animate="visible"
        className={`${styles.hero_scroll}`}
      >
        <Link
          onClick={() => {
            logEvent(getAnalytics(), `Scroll Hero`);
          }}
          to="about"
          smooth={true}
          duration={600}
          offset={10}
          href="about"
          aria-label="about"
        >
          <Icon
            className={`${styles.hero_scroll_mouse}`}
            icon={"iconamoon:mouse-thin"}
          />
          <motion.div
            variants={arrowVariants}
            initial="start"
            animate="end"
            className={`${styles.hero_scroll_arrow}`}
          >
            <Icon
              className={`${styles.hero_scroll_arrow_svg}`}
              icon={"ph:caret-double-down-thin"}
            />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};
export default Hero;
