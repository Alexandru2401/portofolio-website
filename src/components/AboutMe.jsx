import React from "react";
import avatar from "../assets/avatar.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function AboutMe() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="about-section" id="about-me">
      <div className="main-container">
        <div className="about-container">
          <div className="about-section-img">
            <motion.img
              ref={ref}
              initial={{ opacity: 0, x: 0 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, x: -150 }}
              transition={{ duration: 0.5 }}
              src={avatar}
              alt="avatar"
              style={{width:"400px", borderRadius:"50%", height:"400px", objectFit:"cover"}}
            
            />
          </div>
          <div className="about-content">
            <motion.h1
              ref={ref}
              initial={{ opacity: 0, x: 0 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, x: 150 }}
              transition={{ duration: 0.5 }}
              className="about-me-heading"
            >
              About me
            </motion.h1>
            <motion.p
              ref={ref}
              className="hero-section-description"
              initial={{ opacity: 0, y: 150 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
              transition={{ duration: 1.5 }}
            >
              I am a junior front-end developer passionate about technology. I
              work daily on improving my technical skills. The technologies used
              in my projects are HTML, CSS, JavaScript and React, but I try to
              make each project unique.
            </motion.p>
            <motion.p
              ref={ref}
              className="hero-section-description"
              initial={{ opacity: 0, y: 150 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
              transition={{ duration: 1.5 }}
            >
              I follow my professional and personal development, and this can be
              seen in my projects. For example in the first big project that I
              did in React, which is named TopRent, I used CSS for styling, and
              the data was loaded from local JSON files. For in another project,
              which is named E-Com, I used the Bootstrap CSS Framework, and I
              got the data from an Api.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
