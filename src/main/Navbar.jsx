import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const closeMenu = () => {
    setNav(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);
  return (
    <nav className={`navbar ${nav ? "active" : ""}`}>
      <div>
        <img src={logo} className="logo" />
      </div>
      <a className={`nav-hamburger ${nav ? "active" : ""}`} onClick={openNav}>
        <span className="nav-hamburger-line"></span>
        <span className="nav-hamburger-line"></span>
        <span className="nav-hamburger-line"></span>
      </a>
      <div className={`navbar-items ${nav ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/"
              className="navbar-content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/ProjectsPage"
              className="navbar-content"
            >
              Portofolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/AboutMePage"
              className="navbar-content"
            >
              About Me
            </Link>
          </li>
        </ul>
      </div>
      <Link
        activeClass="navbar-active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="/ContactMe"
        className="btn btn-outline-primary"
      >
        Contact me
      </Link>
    </nav>
  );
}

export default Navbar;
