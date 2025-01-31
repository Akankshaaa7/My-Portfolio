import React from 'react';
import newsClassificationImage from '../assets/images/News classification.jpg';
import diabeticsPredictionImage from '../assets/images/Diabetics prediction.png';
import stockPredictionImage from '../assets/images/Stock prediction.jpg';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>

      {/* News Classification Project */}
      <div className="project">
        <img src={newsClassificationImage} alt="News Classification" />
        <h3>News Classification</h3>
        <p>
          The News Classification project uses machine learning algorithms to classify news articles into various categories such as politics, sports, technology, etc. The model is trained on a large dataset of news articles and uses natural language processing (NLP) techniques for accurate classification.
        </p>
      </div>

      {/* Diabetics Prediction Project */}
      <div className="project">
        <img src={diabeticsPredictionImage} alt="Diabetics Prediction" />
        <h3>Diabetics Prediction</h3>
        <p>
          The Diabetics Prediction project aims to predict whether a person is at risk of developing diabetes based on certain health parameters like age, blood sugar level, BMI, etc. It uses logistic regression and decision trees for predictive analysis.
        </p>
      </div>

      {/* Stock Prediction Project */}
      <div className="project">
        <img src={stockPredictionImage} alt="Stock Prediction" />
        <h3>Stock Prediction</h3>
        <p>
          The Stock Prediction project leverages machine learning models, such as time series forecasting and neural networks, to predict future stock prices based on historical data. This project helps traders and investors make data-driven decisions in the stock market.
        </p>
      </div>

    </div>
  );
};

export default Projects;
