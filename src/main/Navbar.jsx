import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PsychologyIcon from '@mui/icons-material/Psychology';
import { Link as ScrollLink } from "react-scroll";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';
import { motion } from "framer-motion";
function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <nav>
      {/* <div>
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>
      </div> */}
      <div className="logo">
        Alex.Dev
      </div>

      <ul
        className={nav ? "list-container-mobile show" : "list-container"}
        onClick={() => {
          setNav(false);
        }}
      >
         <ScrollLink
          to="heroSection"
          duration={500}
          smooth={true}
          className="navbar-content"
        >
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Home <HomeIcon/>
          </motion.li>
        </ScrollLink>
        <ScrollLink
          to="my-skills"
          duration={500}
          smooth={true}
          className="navbar-content"
        >
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Skills <PsychologyIcon/>
          </motion.li>
        </ScrollLink>
        <ScrollLink
          to="about-me"
          duration={500}
          smooth={true}
          className="navbar-content"
        >
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About Me <AccountBoxIcon/>
          </motion.li>
        </ScrollLink>
        <ScrollLink
          to="portofolio"
          duration={500}
          smooth={true}
          className="navbar-content"
        >
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Portofolio <PlaylistAddCheckIcon/>
          </motion.li>
        </ScrollLink>

        <ScrollLink
          to="contact"
          duration={500}
          smooth={true}
          className="btn btn-outline-primary"
        >
          <li>Contact me <ContactMailIcon/></li> 
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
