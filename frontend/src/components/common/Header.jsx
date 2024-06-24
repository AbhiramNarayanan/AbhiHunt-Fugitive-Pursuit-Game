import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>AbhiHunt</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/city-selection">City Selection</Link></li>
          <li><Link to="/vehicle-selection">Vehicle Selection</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
