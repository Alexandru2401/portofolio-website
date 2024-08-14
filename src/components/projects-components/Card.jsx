import React from "react";

export function Card({ title, skills }) {
  return (
    <div className="skill-card-section">
      <div className="skiil-section-card-content">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
