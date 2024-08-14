import React from "react";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function PortofolioCard({ demo, img, link, title, content }) {
  return (
    <div className="portofolio-section-card">
      <Link to={demo} target="_blank">
        <div className="img-container">
          <img className="portofolio-img" src={img} alt="portofolio img" />
          <div className="overlay-text">See live demo</div>
        </div>
      </Link>
      <div className="portofolio-section-card-content">
        <div>
          <h3 className="portofolio-section-title">{title}</h3>
          <p className="text-md">{content}</p>
        </div>
        <Link to={link} target="_blank">
          <button className="btn btn-outline-primary">
            Visit my Github <ArrowOutwardIcon />
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
  );
}
