import React from "react";
import { Link as ScrollLink } from "react-scroll";
import HeroImage from "./HeroImage";

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
            I'm in my first year at the University Titu Maiorescu, Computer
            Science and also a fresh graduated of IT School Romania with
            specialization in web development.
          </p>
          <ScrollLink to="contact" duration={500} smooth={true}>
            <button className="btn btn-primary">Get in Touch</button>
          </ScrollLink>
        </div>
       <HeroImage/>
      </div>
    </section>
  );
}
