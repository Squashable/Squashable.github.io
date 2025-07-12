import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { mainProjects, uniProjects } from '../project-data';
import './Home.css';

export default function Home() {
  return (
    <div className="parent">
      <div className="welcome-section">
        <div className="welcome-text">
          <h2>Welcome!</h2>
          <p>
            Hi, I'm Josh Hudgell.<br />
            This is my portfolio. This is the begining of my react website, this version is just testing<br />
            and development please keep and eye on this page for more project and updates.
          </p>
        </div>
        <div className="welcome-image-container">
          <img
            src="/me.jpg"
            alt="Photo of me"
            className="welcome-image"
          />
        </div>
      </div>
      <h2 className="section-header">Personal Projects</h2>
      <div className="project-grid">
        {mainProjects.map((project) => (
          <ProjectCard
            key={project.path}
            title={project.title}
            text={project.text}
            link={`#/${project.path}`}
            image={project.image}
          />
        ))}
      </div>
      <h2 className="section-header">University Projects</h2>
      <div className="project-grid">
        {uniProjects.map((project) => (
          <ProjectCard
            key={project.path}
            title={project.title}
            text={project.text}
            link={`#/${project.path}`}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}