import React from "react";
import PortofolioCard from "./PortofolioCard";
import { Link } from "react-router-dom";
import gym from "../../assets/gym.png";
import toprent from "../../assets/toprent.png";
import ecomm from "../../assets/ecomm.png";
import news from "../../assets/news.png";
export default function MyPortofolio() {
  return (
    <section className="portofolio-section">
      <div className="portofolio-container-box">
        <div className="portofolio-container">
          <p className="sub-title">Recent Projects</p>
          <h2 className="section-heading">My Portofolio</h2>
        </div>
        <div>
          <Link to="https://github.com/Alexandru2401" target="_blank">
            <button className="btn btn-github">Visit my Github</button>
          </Link>
        </div>
      </div>
      <div className="portofolio-section-container">
        <PortofolioCard
          title="Your dream House"
          img={toprent}
          content="If you need to rent a house, this site is all you need!"
          link="https://github.com/Alexandru2401/real-estate-main"
          demo="https://toprent-real-estate.netlify.app"
        />
        <PortofolioCard
          title="GymWorld"
          img={gym}
          content="Level up your form!"
          link="https://github.com/Alexandru2401/gym-project"
          demo="https://gym-world-project.netlify.app"
        />
        <PortofolioCard
          title="E-commerce"
          img={ecomm}
          content="Shop. Smile. Repeat!s"
          link="https://github.com/Alexandru2401/e-commerce"
          demo="https://e-comm-alex.netlify.app"
        />
        <PortofolioCard
          title="NewsIt"
          content="Keep up-to-date with the latest news!"
          img={news}
          link="https://github.com/Alexandru2401/news-project"
          demo="https://news-web-it-school.netlify.app"
        />
      </div>
    </section>
  );
}
