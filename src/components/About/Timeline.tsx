import { motion } from "framer-motion";
import styles from "../../styles/components/Timeline.module.scss";

const timelineData = [
  {
    title: "Software Development Apprentice",
    company: "Zone01 Kisumu",
    period: "Apr 2024 - Present",
    description: "Full-stack development with Go, JavaScript, and modern web technologies."
  },
  {
    title: "Business Development Associate",
    company: "Sand Technologies",
    period: "Aug 2023 - Dec 2023",
    description: "Developed web applications and managed various databases."
  }
];

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      {timelineData.map((item, index) => (
        <motion.div 
          key={index}
          className={styles.timeline_item}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <div className={styles.timeline_item_dot} />
          <div className={styles.timeline_item_content}>
            <h3>{item.title}</h3>
            <h4>{item.company}</h4>
            <span>{item.period}</span>
            <p>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline; 