import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Artificial from './Artificial';
import Turret from './Turret';
import ModelRail from './ModelRail';
import WebsiteProject from './WebsiteProject';
import Project04 from './Project04';
import Project05 from './Project05';
import Project06 from './Project06';
import Project07 from './Project07';
import Project08 from './Project08';
import Project09 from './Project09';
import Project10 from './Project10';
import UniProject01 from './UniProject01';
import UniProject02 from './UniProject02';
import UniProject03 from './UniProject03';
import UniProject04 from './UniProject04';
import UniProject05 from './UniProject05';
import UniProject06 from './UniProject06';
import UniProject07 from './UniProject07';
import UniProject08 from './UniProject08';
import UniProject09 from './UniProject09';
import UniProject10 from './UniProject10';

const projects = [
  {
    title: 'AI Turret',
    text: 'A project involving computer vision and robotics to track and aim at targets.',
    link: '#/turret',
    image: '/me.jpg',
  },
  {
    title: 'Model Rail',
    text: 'A model railway project with custom electronics and automation.',
    link: '#/model-rail',
    image: '/me.jpg',
  },
  {
    title: 'Portfolio Website',
    text: 'The React-based portfolio website you are currently viewing.',
    link: '#/website-project',
    image: '/me.jpg',
  },
  {
    title: 'Future Project 04',
    text: 'Details coming soon for a new and exciting project. Stay tuned!',
    link: '#/project04',
    image: '/me.jpg',
  },
  {
    title: 'Future Project 05',
    text: 'Details coming soon for a new and exciting project. Stay tuned!',
    link: '#/project05',
    image: '/me.jpg',
  },
  {
    title: 'Future Project 06',
    text: 'Details coming soon for a new and exciting project. Stay tuned!',
    link: '#/project06',
    image: '/me.jpg',
  },
  {
    title: 'Future Project 07',
    text: 'Details coming soon for a new and exciting project. Stay tuned!',
    link: '#/project07',
    image: '/me.jpg',
  },
  {
    title: 'Future Project 08',
    text: 'Details coming soon for a new and exciting project. Stay tuned!',
    link: '#/project08',
    image: '/me.jpg',
  },
  {
    title: 'Future Project 09',
    text: 'Details coming soon for a new and exciting project. Stay tuned!',
    link: '#/project09',
    image: '/me.jpg',
  },
  {
    title: 'Future Project 10',
    text: 'Details coming soon for a new and exciting project. Stay tuned!',
    link: '#/project10',
    image: '/me.jpg',
  },
];

function ProjectCard({ title, text, link, image }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" href={link}>View Project</Button>
      </Card.Body>
    </Card>
  );
}

function Home() {
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
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <div className="spacer" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artificial" element={<Artificial />} />
          <Route path="/turret" element={<Turret />} />
          <Route path="/model-rail" element={<ModelRail />} />
          <Route path="/website-project" element={<WebsiteProject />} />
          <Route path="/project04" element={<Project04 />} />
          <Route path="/project05" element={<Project05 />} />
          <Route path="/project06" element={<Project06 />} />
          <Route path="/project07" element={<Project07 />} />
          <Route path="/project08" element={<Project08 />} />
          <Route path="/project09" element={<Project09 />} />
          <Route path="/project10" element={<Project10 />} />
          <Route path="/uni-project01" element={<UniProject01 />} />
          <Route path="/uni-project02" element={<UniProject02 />} />
          <Route path="/uni-project03" element={<UniProject03 />} />
          <Route path="/uni-project04" element={<UniProject04 />} />
          <Route path="/uni-project05" element={<UniProject05 />} />
          <Route path="/uni-project06" element={<UniProject06 />} />
          <Route path="/uni-project07" element={<UniProject07 />} />
          <Route path="/uni-project08" element={<UniProject08 />} />
          <Route path="/uni-project09" element={<UniProject09 />} />
          <Route path="/uni-project10" element={<UniProject10 />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
