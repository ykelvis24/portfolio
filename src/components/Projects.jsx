import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio built with React and EmailJS integration.',
      link: 'https://your-portfolio-link.com',
    },
    {
      title: 'To-Do App',
      description: 'A simple to-do list app built with React Hooks and local storage.',
      link: 'https://your-todo-app-link.com',
    },
    {
      title: 'Music Player UI',
      description: 'A Spotify-inspired music player interface using React components.',
      link: 'https://your-musicplayer-link.com',
    },
  ];

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
