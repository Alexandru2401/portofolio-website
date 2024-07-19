import React from "react";
import avatar from "../assets/avatar.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import reactimg from "../assets/reactimg.png";
import bootstrap from "../assets/bootstrap.png";

export default function AboutMe() {
	return (
		<section className="about-section" id="about-me">
			<div className="main-container">
				<div className="hero-section-content-box about-section-box">
					<div className="about-section-img">
						<img src={avatar} alt="avatar" />
					</div>
					<div className="hero-section-content">
						<h1 className="about-me-heading">About me</h1>
						<p className="hero-section-description">
							I am a junior front-end developer passionate about technology. I
							work daily on improving my technical skills. The technologies used
							in my projects are HTML, CSS, JavaScript and React, but I try to
							make each project unique.
						</p>
						<p className="hero-section-description">
							I follow my professional and personal development, and this can be
							seen in my projects. For example in the first big project that I
							did in React, which is named TopRent, I used CSS for styling, and
							the data was loaded from local JSON files. For in another project,
							which is named E-Com, I used the Bootstrap CSS Framework, and I
							got the data from an Api.
						</p>
					</div>
				</div>
				<div className="hero-section-content-box about-section-box">
					<h3>My Skils</h3>
					<div className="about-skills">
						<div className="about-skills-container">
							<img src={html} alt="html" />
						</div>
						<div className="about-skills-container">
							<img src={css} alt="css" />
						</div>
						<div className="about-skills-container">
							<img src={js} alt="javascript" />
						</div>
						<div className="about-skills-container">
							<img src={reactimg} alt="react" />
						</div>
						<div className="about-skills-container">
							<img src={bootstrap} alt="bootstrap" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
