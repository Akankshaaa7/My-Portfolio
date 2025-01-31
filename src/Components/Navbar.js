// File: src/Components/Navbar.js
// Author: Akanksha Gurram
// Student ID: 301453510
// Date: 2025-01-30
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        
        <img src={require('../assets/Logo.jpeg')} alt="Logo" className="navbar-logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
