// File: src/App.js
// Name: Akanksha Gurram
// Student ID: 301453510
// Date: 2025-01-30
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Services from './Components/Services';
import ContactMe from './Components/ContactMe';

function App() {
  return (
    
    <Router basename="/My-Portfolio">
      <div className="App">
        {/* Navbar - logo and menu */}
        <Navbar />

        {/* Define Routes for each page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
