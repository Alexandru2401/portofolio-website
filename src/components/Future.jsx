import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Future() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="about-section" id="future">
      <div className="main-container">
        <motion.h1
          ref={ref}
          className="about-me-heading"
          initial={{ opacity: 0, x: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, x: 150 }}
          transition={{ duration: 1 }}
        >
          Present and Future plans
        </motion.h1>
        <motion.div
          ref={ref}
          className="about-me-heading"
          initial={{ opacity: 0, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
          transition={{ duration: 1 }}
        >
          <p className="hero-section-description">
            I'm constantly working on projects and trying to use different
            technologies. I'm learning data structures and algorithms in
            JavaScript to further develop my logic and thinking in programming.
            I also work on TypeScript. 
          </p>
          <p className="hero-section-description">
            In the future I plan to learn the following FrontEnd technologies:
            Sass, Redux and Next.js.
            <br />
            When it comes to the server side, I've completed one of the courses
            from udemy that also touches this part. In that course there was a
            section dedicated exclusively to the back-end, where I've studied
            technologies such as Express.js, Node.js, Authentication and Security, EJS
            and Databases (Sql especially PostgreSQL).
          </p>
          <p className="hero-section-description">
            Development is continuous and when my motivation decrease,{" "}
            <span className="gold">perseverance</span> is what brings me{" "}
            <span className="gold">success</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
