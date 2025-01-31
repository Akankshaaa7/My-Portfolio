import React from 'react';
import '../App.css';  // Correct path to import App.css

function AboutMe() {
  return (
    <div className="page-container">
      <h1>About Me</h1>
      
      {/* Profile Photo */}
      <img 
        src="/assets/images/photo.JPG" 
        alt="Akanksha Gurram" 
        className="profile-photo"
        style={{ width: "150px", height: "150px" }}  
      />
      
      {/* About Content */}
      <p>Hi, I'm Akanksha Gurram. I'm a passionate developer...</p>
      <p>Below is the link to my resume. It contains all information about me.</p>
      <p>Feel free to explore.</p>

      {/* Resume Download Link */}
      <h2>Download My Resume</h2>
      <a href="/assets/resume/Resume-Akanksha-Gurram.pdf" download>Download Resume</a>
    </div>
  );
}

export default AboutMe;
