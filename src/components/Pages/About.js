import React, { useState } from 'react';
import './About.css';

function About() {
  const [codeforcesRating, setCodeforcesRating] = useState(null);
  const [showCodeforcesRating, setShowCodeforcesRating] = useState(false);
 

  const handleCodeforcesClick = async () => {
    try {
      const response = await fetch("https://codeforces.com/api/user.info?handles=akanksha51");
      const data = await response.json();
      setCodeforcesRating(data.result[0].rating);
      setShowCodeforcesRating(true);
    } catch (error) {
      console.error('Error fetching Codeforces rating:', error);
    }
  };

 

 
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-header">
          <p className="about-title">About</p>
        </div>
        <div className="about-content">
          <p className="about-text">
            This is Akanksha Shree, currently pursuing Btech in Biotechnology from BIT Mesra, Ranchi, Jharkhand.
          </p>
          <p className="about-text">
          As a dedicated student , I possess a strong foundation in computer fundamentals, web development, and problem-solving with a focus on data structures and algorithms. I have gained proficiency in  programming languages , allowing me to efficiently implement solutions to complex problems. Through hands-on experience in web development, I have mastered JavaScript, NodeJS, etc., enabling me to create dynamic and responsive websites. Additionally, I have sharpened my problem-solving skills through coursework and personal projects, utilizing DSA concepts to optimize code performance.
          </p>
        </div>
        <div className="coding-profile">
          <p className="coding-profile-title">Coding Profile</p>
          <div className="coding-profile-buttons">
            <button className="coding-profile-button" onClick={handleCodeforcesClick}>
              Codeforces {showCodeforcesRating && `Rating: ${codeforcesRating}`}
            </button>
            
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
