import React from "react";
import avatar from "../assets/avatar.png";
import { Link as ScrollLink } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-section-container">
        <div className="content-container">
          <p className="section-title">Hey, I'm Alex</p>
          <h1 className="hero-section-title">
            <span>FrontEnd</span> {""}
            <br />
            Developer
          </h1>
          <p className="hero-section-description">
            My name is Toma Alexandru and I'm a junior Front-End Developer.
            <br />
            I'm also a fresh graduated of IT School Romania and my
            specialization is web development.
            {/*I continuously work to improve
              myself and try to accumulate as many skills as possible. */}
          </p>
          <ScrollLink to="contact" duration={500} smooth={true}>
            <button className="btn btn-primary">Get in Touch</button>
          </ScrollLink>
        </div>
        <div className="img-container">
        <img src={avatar} alt="avatar" />
              </div>
      </div>
    </section>
  );
}
