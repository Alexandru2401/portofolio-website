import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { Link as ScrollLink } from "react-scroll";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomeIcon from "@mui/icons-material/Home";
import { motion } from "framer-motion";
function Navbar() {
  const [nav, setNav] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function handleClick(index){
    setIsActive(index);
  }
  return (
    <nav>
      <div className="logo">Alex.Dev</div>

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
          className={`navbar-content ${isActive === 0 ? 'active-class' : ''}`}
          onClick={() => handleClick(0)}
        >
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Home <HomeIcon className="icon" />
          </motion.li>
        </ScrollLink>
        <ScrollLink
          to="my-skills"
          duration={500}
          smooth={true}
          className={`navbar-content ${isActive === 1 ? 'active-class' : ''}`}
          onClick={() => handleClick(1)}
        >
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Skills <PsychologyIcon className="icon" />
          </motion.li>
        </ScrollLink>
        <ScrollLink
          to="about-me"
          duration={500}
          smooth={true}
          className={`navbar-content ${isActive === 2 ? 'active-class' : ''}`}
          onClick={() => handleClick(2)}
        >
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About Me <AccountBoxIcon className="icon" />
          </motion.li>
        </ScrollLink>
        <ScrollLink
          to="portofolio"
          duration={500}
          smooth={true}
          className={`navbar-content ${isActive === 3 ? 'active-class' : ''}`}
          onClick={() => handleClick(3)}
        >
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Portofolio <PlaylistAddCheckIcon className="icon" />
          </motion.li>
        </ScrollLink>

        <ScrollLink
          to="contact"
          duration={500}
          smooth={true}
          className="btn btn-outline-primary"
        >
          <li>
            Contact me <ContactMailIcon className="icon" />
          </li>
        </ScrollLink>
      </ul>

      <button
        className="nav-btn"
        onClick={() => {
          setNav(!nav);
        }}
      >
        {" "}
        {nav ? <CloseIcon style={{fontSize: "30px"}}/> : <MenuIcon style={{fontSize: "30px"}}/>}
      </button>
    </nav>
  );
}

export default Navbar;
