// import React from "react";
// // Aici trb sa fac un format json pt skill-uluri si sa fac map

// export function Card({  title, children }) {
//   return (
//     <div className="skill-card-section">

//       <div className="skiil-section-card-content">
//         <h3 className="skill-section-title">{title}</h3>
//         {children}
//       </div>
//     </div>
//   );
// }
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
