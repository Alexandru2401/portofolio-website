import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <nav>
      <div>
        <img src={logo} className="logo" />
      </div>

      <ul
        className={nav ? "list-container-mobile show" : "list-container"}
        onClick={() => {
          setNav(false);
        }}
      >
        <li>
          <Link to="/" className="navbar-content">
            Home
          </Link>
        </li>
        <li>
          <Link to="/ProjectsPage" className="navbar-content">
            Portofolio
          </Link>
        </li>
        <li>
          <Link to="/AboutMePage" className="navbar-content">
            About Me
          </Link>
        </li>
        <li>
          <Link to="/ContactMe" className="btn btn-outline-primary">
            Contact me
          </Link>
        </li>
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
