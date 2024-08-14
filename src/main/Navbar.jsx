import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <nav>
      <div>
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>
      </div>

      <ul
        className={nav ? "list-container-mobile show" : "list-container"}
        onClick={() => {
          setNav(false);
        }}
      >
        <ScrollLink
          to="about-me"
          duration={500}
          smooth={true}
          className="navbar-content"
        >
          <li>About Me</li>
        </ScrollLink>
        <ScrollLink
          to="portofolio"
          duration={500}
          smooth={true}
          className="navbar-content"
        >
          <li>Portofolio</li>
        </ScrollLink>

        <ScrollLink
          to="contact"
          duration={500}
          smooth={true}
          className="btn btn-outline-primary"
        >
          <li>Contact me</li>
        </ScrollLink>
      </ul>

      <button
        className="nav-btn"
        onClick={() => {
          setNav(!nav);
        }}
      >
        {" "}
        {nav ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
}

export default Navbar;
