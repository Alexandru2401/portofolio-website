import React from "react";
import { Card } from "./projects-components/Card";
import { MySkills, NonTehnicalSkills } from "../api/skills";
export default function MySkill() {
  return (
    <section className="skill-section" id="my-skills">
      <div className="main-container">
        <div className="portofolio-container">
          <h2 className="skills-section-heading">My Skills</h2>
        </div>
        <h3>Tehnical skills</h3>
        <div className="skill-section-container">
          {MySkills.map((skillsSet, index) => (
            <Card
              key={index}
              title={skillsSet.title}
              skills={skillsSet.skills}
            />
          ))}
        </div>
        <h3>Non-Tehnical skills</h3>
        <div className="skill-section-container">
          {NonTehnicalSkills.map((skillsSet, index) => (
            <Card
              key={index}
              title={skillsSet.title}
              skills={skillsSet.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
