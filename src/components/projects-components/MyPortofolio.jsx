import React from "react";
import PortofolioCard from "./PortofolioCard";
import { Link } from "react-router-dom";
import { portofolio } from "../../api/portfolio";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function MyPortofolio() {

  return (
    <section className="portofolio-section" id="portofolio">
      <div className="main-container">
        <div className="portofolio-container-box">
          <div className="portofolio-container">
            <h2 className="section-heading">My Projects</h2>
          </div>
          <div>
            <Link to="https://github.com/Alexandru2401" target="_blank">
              <button className="btn btn-github">Visit my Github <GitHubIcon/> </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="portofolio-section-container">
            {portofolio.map((item, index) => (
              <PortofolioCard
                key={index}
                index={index}
                img={item.img}
                title={item.title}
                technologies={item.technologies}
                content={item.content}
                description={item.description}
                link={item.link}
                demo={item.demo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
