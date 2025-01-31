// File: src/Components/Home.js
// Author: Akanksha Gurram
// Student ID: 301453510
// Date: 2025-01-30
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../App.css'; // Import the CSS for styling

const Home = () => {
  return (
    <div className="page-container">
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home page of my personal portfolio website.</p>
      
      <p>
        I am Akanksha Gurram, a passionate developer.
        This portfolio showcases my work, skills, and projects .
      </p>
      
      
      {/* Button that navigates to the About Me page */}
      <Link to="/about">
        <button className="btn">Learn More About Me</button>
      </Link>

    </div>
  );
};

export default Home;
