import React from 'react';
import "./project.css";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import MINISITE from '../../assets/Screenshot (2).png';
import Portf from '../../assets/Screenshot (5).png';
import Portfolio from '../../assets/Screenshot (3).png';

const items = [
  {
    id: 1,
    title: "E-commerce Website",
    img: MINISITE, // Use imported image here
    description:  "A creative and well-structured website with responsive design for seamless browsing on different devices.",
    demo: "https://github.com/Mini1011/MINISITE",
  },
  {
    id: 2,
    title: "Portfolio",
    img: Portfolio, // Use imported image here
    description: "Personal portfolio highlighting my skills, projects,etc.",
    demo: "https://github.com/Mini1011/PORTFOLIO1",
  },
  {
    id: 3,
    title: "Advance Portfolio-Website",
    img: Portf, // Use imported image here
    description: "An interactive website build using React with dynamic navigtion and rsponsive user interface.",
    demo: "https://github.com/Mini1011/Advance-Portfolio-Website",
  },
];

function Projects() {
  const { scrollYProgress } = useViewportScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]); // Adjust range as needed

  const handleTitleClick = (demoLink) => {
    window.open(demoLink, "_blank");
  };

  return (
    <div className="projects">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          className="progressBar"
          style={{
            scaleX: scaleX,
            transformOrigin: "left center"
          }}
        />
      </div>
      {items.map(item => (
        <motion.div
          className="container"
          key={item.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="wrapper">
            <div className="imgContainer">
              <img src={item.img} alt={item.title} />
            </div>
            <motion.div className="textContainer">
              <h2
                style={{ cursor: "pointer" }}
                onClick={() => handleTitleClick(item.demo)}
              >
                {item.title}
              </h2>
              <p>{item.description}</p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Projects;
