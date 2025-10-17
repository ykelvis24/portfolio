import React, { useEffect, useState } from 'react';
import './About.css';

function About() {
  const fullText = `Hi, I’m Elvis, a Computer Science student of Alex Ekueme Federal University, Ndufu-Alike, Ikwo, Ebonyi state. I'm from Nigeria. I’m passionate about building modern, responsive web applications using React, HTML, CSS, and JavaScript. I’m currently focused on becoming a Fullstack Developer and constantly learning new technologies to improve my skills.`;
  const [text, setText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Me</h2>

        <p className="typing-text">{text}</p>

        <h3>Skills</h3>
        <ul className="skills-list">
          <li>React</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Frontend Development</li>
          <li>Fullstack Concepts</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
