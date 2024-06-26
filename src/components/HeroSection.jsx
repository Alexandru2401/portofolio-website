import React from "react";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-section-content-box">
        <div className="hero-section-content">
          <p className="section-title">Hey, I'm Alex</p>
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">FrontEnd</span> {""}
            <br />
            Developer
          </h1>
          <p className="hero-section-description">
            My name is Toma Alexandru and i am junior Front-End Developer.
            <br />I am fresh graduated of IT School Romania, and my
            specialization is web development. I work continuously to improve
            myself and try to accumulate as many skills as possible.
          </p>
          <Link to="./ContactMe">
            <button className="btn btn-primary">Get in Touch</button>
          </Link>
        </div>
      </div>
      <div className="hero-section-img">
        <img src={avatar} alt="avatar" />
      </div>
    </section>
  );
}
