import React from "react";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState, useEffect } from "react";
export default function PortofolioCard({
  demo,
  index,
  img,
  link,
  title,
  content,
  description,
  technologies,
}) {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const position = index % 2 === 0;
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <motion.div
      className={`card-container ${isLargeScreen ? (position ? "row": "row-reverse") : ""}`}
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      whilehover={{ scale: 1.1, transition: { duration: 0.3 } }}
    >
      <div className="first-col">
        <div className="img-overlay-container">
        <Link to={demo} target="_blank">
          <img className="portofolio-img" src={img} alt="portofolio img" />
          <div className="overlay-text">See live demo</div>
        </Link>
        </div>
      </div>
      <div className="second-col">
        <div className="portofolio-section-card-content">
          <div>
            <h3 className="portofolio-section-title">{title}</h3>
            <p className="text-md">{content}</p>
            <p className="description">{description}</p>
          </div>
          <div className="technologies-container">
            {technologies
              ? technologies.map((technology, index) => (
                  <p key={index}>{technology}</p>
                ))
              : null}
          </div>
          <div className="btn-container">
            <Link to={link} target="_blank">
              <button className="btn btn-outline-primary">
                See Code
                <GitHubIcon className="icon"/>
              </button>
            </Link>
            <Link to={demo} target="_blank">
              <button className="btn btn-outline-primary">
                See live demo
                <ArrowOutwardIcon className="icon"/>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
