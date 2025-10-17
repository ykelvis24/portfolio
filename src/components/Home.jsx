import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home-section">
      <div className="home-content">
        <h1>Hello, I’m <span>Elvis</span></h1>
        <h2>Fullstack Developer</h2>
        <p>Building responsive and modern web applications with React, JavaScript, and more.</p>
        <Link to="/projects" className="cta-btn">View Projects</Link>
      </div>
    </section>
  );
}

export default Home;
