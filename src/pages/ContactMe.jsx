import React from "react";
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom' 

export default function ContactMe(){
    return (
        <section className="contact-section">
            <div>
            <p className="sub-title">Get in touch</p>
            <h2>Contact me</h2>
            <p className="section-title">If you feel that my skills match to your requirements, feel free to contact me:</p>
            <Link to="https://www.linkedin.com/in/alexandru-ionut-toma-57a02a2a9/" target="_blank"><p className="btn btn-outline-primary">LinkedIn</p></Link>
            </div>
        </section>
    )
}