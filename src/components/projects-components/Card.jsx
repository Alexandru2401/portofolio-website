import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export function Card({ title, skills }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <motion.div
      className="skill-card-section"
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      whileHover={{scale: 1.1, transition: {duration: 0.5}}}
    >
      <div className="skiil-section-card-content">
        <h3 className="skill-card-title">{title}</h3>
      </div>
      <div className="skill-card-body">
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
