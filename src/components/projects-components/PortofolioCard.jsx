import React from "react";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
export default function PortofolioCard({
  demo,
  index,
  img,
  link,
  title,
  content,
  technologies,
}) {
  const position = index % 2 === 0;

  return (
    <div
      className="card-container"
      style={{ flexDirection: position ? "row" : "row-reverse" }}
    >
      <div className="first-col">
        <Link to={demo} target="_blank">
          <img className="portofolio-img" src={img} alt="portofolio img" />
          <div className="overlay-text">See live demo</div>
        </Link>
      </div>
      <div className="second-col">
        <div className="portofolio-section-card-content">
          <div>
            <h3 className="portofolio-section-title">{title}</h3>
            <p className="text-md">{content}</p>
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
                See Code <ArrowOutwardIcon />
              </button>
            </Link>
            <Link to={demo} target="_blank">
              <button className="btn btn-outline-primary">
                See live demo
                <ArrowOutwardIcon />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
