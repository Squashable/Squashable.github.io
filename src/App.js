import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import UniProject01 from './UniProject01';

// Page and Component Imports
import Home from './pages/Home';
import Artificial from './Artificial';
import Turret from './Turret';
import ModelRail from './ModelRail';
import WebsiteProject from './WebsiteProject';
import ProjectPage from './components/ProjectPage';

// Data Imports
import { mainProjects, uniProjects } from './project-data';

const specificProjectPaths = ['turret', 'model-rail', 'website-project'];
const genericProjects = mainProjects.filter(p => !specificProjectPaths.includes(p.path));

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <div className="spacer" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artificial" element={<Artificial />} />

          {/* Specific project routes */}
          <Route path="/turret" element={<Turret />} />
          <Route path="/model-rail" element={<ModelRail />} />
          <Route path="/website-project" element={<WebsiteProject />} />

          {/* Specific route for the Uni Project page (renders the standalone component) */}
          <Route path="/uni-project01" element={<UniProject01 />} />

          {/* Dynamically generated routes */}
          {[...genericProjects, ...uniProjects].map(project => (
            <Route
              key={project.path}
              path={`/${project.path}`}
              element={<ProjectPage title={project.title} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}


export default App;
