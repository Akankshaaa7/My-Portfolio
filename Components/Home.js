// File:src/pages/Home.js
// Author: Akanksha Gurram
// Student ID: 301453510
// Date: 2025-01-30
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to My Portfolio!</h2>
      <p>Hi, I'm Akanksha Gurram a passionate developer. Feel free to explore my website!</p>
      <p><Link to="/about">Learn more about me</Link></p>
      <p><Link to="/projects">View my projects</Link></p>
    </div>
  );
};

export default Home;
