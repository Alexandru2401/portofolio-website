import React from "react";
import PortofolioCard from "./PortofolioCard";
import { Link } from "react-router-dom";
import Calculator from "../../assets/Calculator.png";
import Keeper from "../../assets/Keeper.png";
import weather from "../../assets/weather.png";
export default function FirstProjects() {
  return (
    <section className="first-projects-section">
      <div className="first-projects-container-box">
        <div className="first-projects-container">
          <p className="sub-title">My first project</p>
          <h2 className="first-projects-heading">
            Everyone has started from somewhere, so you might be interested to
            see my first projects
          </h2>
        </div>
        <div>
          <Link to="https://github.com/Alexandru2401" target="_blank">
            <button className="btn btn-github">Visit my Github</button>
          </Link>
        </div>
      </div>
      <div className="first-projects-section-container">
        <PortofolioCard
          title="Calculator"
          content="My first JS project. You need to do some calculations? Try this calculator!"
          img={Calculator}
          link="https://github.com/Alexandru2401/Calculator"
          demo="https://calculator-app-alex.netlify.app"
        />
        <PortofolioCard
          title="Keeper app"
          content="An app similar to the one offered by google: Keep app."
          img={Keeper}
          link="https://github.com/Alexandru2401/Keeper-app-projects"
          demo="https://keeper-app-projects.netlify.app"
        />
        <PortofolioCard
          title="Weather"
          img={weather}
          content="Want bad weather never to catch you by surprise? Try our weather app."
          link="https://github.com/Alexandru2401/Forecast-Weather-Project"
          demo="https://weather-app-it-school-alex.netlify.app/"
        />
      </div>
    </section>
  );
}
