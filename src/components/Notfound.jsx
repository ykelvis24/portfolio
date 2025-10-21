import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css';

function Notfound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Oops! Page not found</h2>
      <p>The page you’re looking for doesn’t exist or has been moved.</p>
      <Link to="/redirect" className="home-btn">Go Back Home</Link>
    </div>
  );
}

export default Notfound;
