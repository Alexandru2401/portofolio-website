import React from "react";
// Aici trb sa fac un format json pt skill-uluri si sa fac map 

export function Card(props){
    return (
                <div className="skill-card-section">
                    <div className="skill-section-img">
                        <img src={props.img}/>
                    </div>
                    <div className="skiil-section-card-content">
                        <h3 className="skill-section-title">{props.title}</h3>
                        <div>
                        <p className="skill-section-description">{props.skill1}</p> 
                        <p className="skill-section-description">{props.skill2}</p>  
                        <p className="skill-section-description">{props.skill3}</p>  
                        <p className="skill-section-description">{props.skill4}</p>  
                        </div>
                    </div>
                </div>
    )
}