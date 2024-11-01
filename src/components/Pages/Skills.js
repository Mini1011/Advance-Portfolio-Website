import React from 'react';
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import nodejs from "../../assets/node.png";
import github from "../../assets/github.png";
import tailwind from "../../assets/tailwind.png";
import sql from "../../assets/sql.png";
import mongodb from "../../assets/mongodb.png";
import './skills.css';

function Skills() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: sql,
      title: "MySQL",
      style: "shadow-orange-300",
    },
    {
      id: 8,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Skills</h2>
          <p>Technologies I have worked with</p>
        </div>
        <div className="skills-grid">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`skill-card ${style}`}>
              <img src={src} alt={title} className="skill-icon" />
              <p className="skill-title">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
