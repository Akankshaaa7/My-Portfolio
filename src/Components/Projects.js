// File: src/pages/projects.js
// Author: Akanksha Gurram
// Student ID: 301453510
// Date: 2025-01-30

import React from 'react';
import '../App.css'; // Importing CSS for styling

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      
      {/* Project 1: BBC News Categorization */}
      <div className="project-card">
        <img 
          src="/assets/images/News classification.jpg" // Corrected path
          alt="BBC News Classification"
          className="project-image"
        />
        <h3>BBC News Categorization</h3>
        <p>
          In this project, I created a model to classify news articles into different categories based on cities. The model uses machine learning algorithms to automatically label news articles. This system is useful for online news categorization and labeling for news agencies.
        </p>
      </div>

      {/* Project 2: Diabetes Disease Prediction */}
      <div className="project-card">
        <img 
          src="/assets/images/Diabetics prediction.jpeg" 
          alt="Diabetes Prediction"
          className="project-image"
        />
        <h3>Diabetes Disease Prediction</h3>
        <p>
          In this project, I used machine learning algorithms to predict whether a person is at risk of developing diabetes. The system uses factors like age, BMI, and insulin levels to generate predictions. This project showcases how machine learning can be applied to healthcare for early diagnosis and prediction.
        </p>
      </div>

      {/* Project 3: Stock Price Prediction */}
      <div className="project-card">
        <img 
          src="/assets/images/Stock prediction.jpg" 
          alt="Stock Price Prediction"
          className="project-image"
        />
        <h3>Stock Price Prediction</h3>
        <p>
          This project uses machine learning algorithms like Linear Regression and Random Forest to predict stock prices. By training the model on historical stock data, it aims to forecast price trends and help investors make more informed decisions.
        </p>
      </div>
    </div>
  );
}

export default Projects;
