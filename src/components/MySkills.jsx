import React from "react";
import { Card } from "./projects-components/Card";

export default function MySkill() {
	return (
		<section className="skill-section" id="my-skills">
			<div className="main-container">
				<div className="portofolio-container">
					<h2 className="skills-section-heading">My Skills</h2>
				</div>
				<div className="skill-section-container">
					<Card
						title="Basics"
						skill1="HTML"
						skill2="CSS"
						skill3="JavaScript"
					/>
					<Card
						title="Frameworks"
						skill1="Bootstrap"
						skill2="React"
					/>
					<Card
						title="Other"
						skill1="Git"
						skill2="GitHub"
						skill3="Responsive Design"
						skill4="JQuerry"
					/>
				</div>
			</div>
		</section>
	);
}
