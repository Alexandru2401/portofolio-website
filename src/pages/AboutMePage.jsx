import React from "react";
import AboutMe from "../components/AboutMe";
import Future from "../components/Future";
import { useLocation } from "react-router-dom";

export default function AboutMePage() {
	const location = useLocation();
	const isAboutPage = location.pathname === "/AboutMePage";
    
	return (
		<div className="about-page">
			{isAboutPage ? (
				<>
					<AboutMe />
					<Future />
				</>
			) : (
				<AboutMe />
			)}
		</div>
	);
}
