import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="home" className="nav-logo" smooth={true} duration={500}>
           Akanksha Shree
            
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-links"
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="nav-links"
                onClick={handleClick}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
