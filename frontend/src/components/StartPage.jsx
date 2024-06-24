import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/main.css'; // Ensure this is imported for styles

const StartPage = () => {
  return (
    <div className="start-page">
      <h1>Let the Adventure Begin!</h1>
      <Link to="/city-selection">
        <button>Start Game</button>
      </Link>
    </div>
  );
};

export default StartPage;
