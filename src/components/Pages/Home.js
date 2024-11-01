import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import Typed from "typed.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

export default function Home() {
  const typedElement = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const textVariants = {
    initial: {
      x: isMobile ? -200 : -500,
      opacity: 0,
    },
    animate: {
      x: isMobile ? 0 : -90,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: isMobile ? -100 : -220,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

  useEffect(() => {
    const options = {
      strings: [
        "Full Stack Web Developer",
        "Competitive Programmer",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero">
      <motion.div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>
            <span ref={typedElement}></span>
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="nav-links"
            >
              <motion.button
                variants={textVariants}
                whileHover={{
                  backgroundColor: "orange",
                  scale: 1.1,
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                See the Latest Work
              </motion.button>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-links"
            >
              <motion.button
                variants={textVariants}
                whileHover={{
                  backgroundColor: "orange",
                  scale: 1.1,
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
          <a
            href="https://drive.google.com/file/d/1cJmpRZgfLAMtn4uLfne6Wpsn-20ZAjR3/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              variants={textVariants}
              animate="scrollButton"
              className="resume-icon"
            >
              <FontAwesomeIcon icon={faFilePdf} />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        I am a Full Stack Web Developer
      </motion.div>
      <div className="imageContainer">
        <img src={require("../../assets/g3.png")} alt="hero" />
      </div>
    </div>
  );
}
