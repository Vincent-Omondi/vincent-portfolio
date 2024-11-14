"use client";
import { SkillsData } from "@/db/main";
import { Icon } from "@iconify/react";
import { Variants, motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, memo } from "react";
import styles from "../../styles/components/Skills.module.scss";

// Animation variants for container elements
const containerVariants: Variants = {
  initial: { 
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.05
    }
  }
};

// Animation variants for individual items
const itemVariants: Variants = {
  initial: { 
    opacity: 0,
    y: 10 
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

// Memoized skill item component to prevent unnecessary re-renders
const SkillItem = memo(({ skill }: { skill: { name: string; icon: string } }) => (
  <motion.div
    className={styles.skill_item}
    variants={itemVariants}
    whileHover={{ 
      scale: 1.03,
      transition: { duration: 0.2 }
    }}
  >
    <Icon 
      icon={skill.icon} 
      className={styles.skill_icon} 
    />
    <span className={styles.skill_name}>
      {skill.name}
    </span>
  </motion.div>
));

SkillItem.displayName = 'SkillItem';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(SkillsData.categories[0].title);

  // Memoize the active category's skills to prevent unnecessary recalculations
  const activeSkills = useMemo(() => 
    SkillsData.categories.find(cat => cat.title === activeCategory)?.skills ?? [],
    [activeCategory]
  );

  return (
    <div className={styles.skills} id="skills">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={styles.skills_title}
      >
        {SkillsData.title}
      </motion.h2>

      <div className={styles.skills_container}>
        <div className={styles.skills_tabs}>
          {SkillsData.categories.map((category) => (
            <motion.button
              key={category.title}
              className={`${styles.skills_tab} ${
                activeCategory === category.title ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category.title)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-selected={activeCategory === category.title}
              role="tab"
            >
              {category.title}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className={styles.skills_content}
            initial="initial"
            animate="animate"
            exit="initial"
            variants={containerVariants}
          >
            {activeSkills.map((skillGroup) => (
              <motion.div 
                key={skillGroup.category} 
                className={styles.skill_group}
                variants={containerVariants}
              >
                <h4 className={styles.skill_group_title}>
                  {skillGroup.category}
                </h4>
                <div className={styles.skill_items}>
                  {skillGroup.items.map((skill) => (
                    <SkillItem key={skill.name} skill={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default memo(Skills);