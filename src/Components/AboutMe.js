// File: src/Components/AboutMe.js
// Author: Akanksha Gurram
// Student ID: 301453510
// Date: 2025-01-30
import React from 'react';
import '../App.css';  
import photo from '../assets/photo.JPG';  

function AboutMe() {
  return (
    <div className="page-container">
      <h1>About Me</h1>

      {/* Profile Photo - Using Import */}
      <img 
        src={photo}  
        alt="Akanksha Gurram" 
        className="profile-photo"
        style={{ width: "150px", height: "150px" }}  
      />

      {/* About Content */}
      <p>Hi, I'm Akanksha Gurram. I'm a passionate developer with experience in building web applications.</p>
      <p>I love working on creative projects and learning new technologies.</p>
      <p>Below is the link to my resume. It contains all information about me.</p>
      <p>Feel free to explore!</p>

      {/* Resume Download Link */}
      <h2>Download My Resume</h2>
      <a 
        href={require('../assets/Resume-Akanksha-Gurram.pdf')}  
        download 
        className="resume-link"
      >
        Download Resume
      </a>
    </div>
  );
}

export default AboutMe;
