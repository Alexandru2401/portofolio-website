import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function ContactMe() {
	return (
		<section className="contact-section" id="contact">
			<div className="main-container">
				<div>
					<h2>Contact me</h2>
					<p className="sub-title">Get in touch</p>
					<p className="section-title">
						If you feel that my skills match your requirements, feel free to
						contact me:
					</p>
					<Link
						to="https://www.linkedin.com/in/alexandru-ionut-toma-57a02a2a9/"
						target="_blank"
					>
						<button className="btn btn-outline-primary">LinkedIn <LinkedInIcon/></button>
					</Link>
				</div>
			</div>
		</section>
	);
}
