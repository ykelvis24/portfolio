import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Redirect.css';

function Redirect() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          navigate('/');
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="redirect-container">
      <h2>Redirecting you in {count}...</h2>
      <p>If you’re not redirected automatically, <span onClick={() => navigate('/')}>click here</span>.</p>
    </div>
  );
}

export default Redirect;
