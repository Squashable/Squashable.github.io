import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
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

const divStyle = {
  background: 'linear-gradient(90deg, #eaf4fb 0%, #dbeafe 100%)',
  borderRadius: '8px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
  padding: '18px 28px',
  textAlign: 'left'
};

const imgContainerStyle = {
  background: 'linear-gradient(90deg, #eaf4fb 0%, #dbeafe 100%)',
  borderRadius: '8px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
  padding: '5px',
  flex: '0 0 auto',
  display: 'inline-block'
};

const imgStyle = {
  maxWidth: '225px', // Shrunk to half the previous size
  boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
  border: '2px solid #eaf4fb',
  background: '#dbeafe'
};

const flexRow = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '32px',
  marginBottom: '32px',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '24px',
  maxWidth: '950px',
  margin: '0 auto',
};

function Home() {
  return (
    <div className="parent">
      <div style={flexRow}>
        <div className="div10" style={divStyle}>
          <h2 style={{ marginTop: 0 }}>Welcome!</h2>
          <p>
            Hi, I'm Josh Hudgell.<br />
            This is my portfolio. This is the begining of my react website, this version is just testing<br />
            and development please keep and eye on this page for more project and updates.
          </p>
        </div>
        <div className="div11" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={imgContainerStyle}>
            <img
              src="/me.jpg"
              alt="Photo of me"
              style={imgStyle}
            />
          </div>
        </div>
      </div>
      <div style={gridStyle}>
        <div className="div13" style={divStyle}>
          HAMLET (Act 3, Scene 1):<br />
          "To be, or not to be: that is the question:<br />
          Whether 'tis nobler in the mind to suffer<br />
          The slings and arrows of outrageous fortune,<br />
          Or to take arms against a sea of troubles,<br />
          And by opposing end them...
        </div>
        <div className="div14" style={divStyle}>
          HAMLET (Act 3, Scene 1):<br />
          "To be, or not to be: that is the question:<br />
          Whether 'tis nobler in the mind to suffer<br />
          The slings and arrows of outrageous fortune,<br />
          Or to take arms against a sea of troubles,<br />
          And by opposing end them...
        </div>
        <div className="div17" style={divStyle}>
          HAMLET (Act 3, Scene 1):<br />
          "To be, or not to be: that is the question:<br />
          Whether 'tis nobler in the mind to suffer<br />
          The slings and arrows of outrageous fortune,<br />
          Or to take arms against a sea of troubles,<br />
          And by opposing end them...
        </div>
        <div className="div18" style={divStyle}>
          HAMLET (Act 3, Scene 1):<br />
          "To be, or not to be: that is the question:<br />
          Whether 'tis nobler in the mind to suffer<br />
          The slings and arrows of outrageous fortune,<br />
          Or to take arms against a sea of troubles,<br />
          And by opposing end them...
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <div style={{ height: '20px' }} />
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
