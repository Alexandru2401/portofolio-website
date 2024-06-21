import React from "react";
import { Card } from "./projects-components/Card";
import framewok from "../assets/framewok.png";
import Frontend from "../assets/Frontend.jpg";
import other from "../assets/other.png";
export default function MySkill() {
  return (
    <section className="skill-section" id="my-skills">
      <div className="portofolio-container">
        <p className="section-title">My Skills</p>
        <h2 className="skills-section-heading">My Expertise</h2>
      </div>
      <div className="skill-section-container">
        <Card
          img={Frontend}
          title="Basics"
          skill1="HTML"
          skill2="CSS"
          skill3="JavaScript"
          skill4="JQuerry"
        />
        <Card
          img={framewok}
          title="Framework"
          skill1="Bootstrap"
          skill2="React"
        />
        <Card
          img={other}
          title="Other"
          skill1="Git"
          skill2="GitHub"
          skill3="Responsive Design"
        />
      </div>
    </section>
  );
}
