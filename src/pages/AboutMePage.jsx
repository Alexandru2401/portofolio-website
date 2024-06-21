import React from "react";
import AboutMe from "../components/AboutMe";
import Future from "../components/Future";

export default function AboutMePage(){
    const isDisplayed = window.location.pathname === "/";

    return (
       <div>
        {isDisplayed ? (<AboutMe/>) : (
        <div>
        <AboutMe/>
        <Future/>
        </div>)}
       </div>
    )
}