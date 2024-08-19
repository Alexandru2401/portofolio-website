import React from "react";
import { Card } from "./projects-components/Card";
import { MySkills } from "../api/skills";
export default function MySkill() {
  return (
    <section className="skill-section" id="my-skills">
      <div className="main-container">
        <div className="portofolio-container">
          <h2 className="skills-section-heading">My Skills</h2>
        </div>
        <div className="skill-section-container">
          {MySkills.map((skillsSet, index) => (
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
