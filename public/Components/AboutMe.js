

// File: src/Pages/About.js
// Author: Akanksha Gurram
// Student ID: 301453510
// Date: 2025-01-30
import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      
     
      <img 
        src="/assets/images/Logo.jpeg"
        alt="Logo.jpeg" 
        className="profile-photo" 
        style={{ width: "150px", height: "150px" }} 
      />
      
      <p>Hi, I'm Akanksha Gurram. I'm a passionate developer...</p>

      <h2>Download My Resume</h2>
      {/* Link to Resume PDF */}
      <a href="%PUBLIC_URL%/assets/Resume-Akanksha-Gurram.pdf" download>Download Resume</a>

    </div>
  );
}

export default AboutMe;
