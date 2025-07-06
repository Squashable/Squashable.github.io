import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const pageMap = {
  "/": "Welcome to My Portfolio\nJoshua Hudgell BEng(Hons) Mechatronics Engineering ",
  "/Artifical": "My Stance on AI Use",
  "/website-turret.html": "Turret",
  "/website-model-rail.html": "Model Rail",
  "/website-project.html": "Website Building",
  "/Project04.html": "Future Project 04",
  "/Project05.html": "Future Project 05",
  "/Project06.html": "Future Project 06",
  "/Project07.html": "Future Project 07",
  "/Project08.html": "Future Project 08",
  "/Project09.html": "Future Project 09",
  "/Project10.html": "Future Project 10"
};

const titleBoxStyle = {
  background: 'linear-gradient(90deg, #eaf4fb 0%, #dbeafe 100%)',
  borderRadius: '12px',
  padding: '18px 32px',
  margin: '24px auto 0 auto',
  fontWeight: 600,
  fontSize: '1.15em',
  color: '#222c44',
  boxShadow: '0 2px 8px rgba(34,44,68,0.06)',
  maxWidth: '700px',
  textAlign: 'center',
  display: 'block',
};

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const pageTitle = pageMap[currentPath] || "";

  return (
    <>
      <nav className="navbar">
        <Link to="/" className={currentPath === "/" ? "active" : ""}>Home</Link>
        <Link to="/Artifical" className={currentPath === "/Artifical" ? "active" : ""}>AI Perspective</Link>
        <div
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="dropbtn">
            Projects
            <svg width="18" height="18" viewBox="0 0 20 20" style={{ verticalAlign: "middle", marginLeft: 6 }} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 8l4 4 4-4" stroke="#222c44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="dropdown-content" style={{ display: dropdownOpen ? "block" : "none" }}>
            <Link to="/website-turret.html">Turret</Link>
            <Link to="/website-model-rail.html">Model Rail</Link>
            <Link to="/website-project.html">Website Building</Link>
            <Link to="/Project04.html">Future Project 04</Link>
            <Link to="/Project05.html">Future Project 05</Link>
            <Link to="/Project06.html">Future Project 06</Link>
            <Link to="/Project07.html">Future Project 07</Link>
            <Link to="/Project08.html">Future Project 08</Link>
            <Link to="/Project09.html">Future Project 09</Link>
            <Link to="/Project10.html">Future Project 10</Link>
          </div>
        </div>
      </nav>
      {pageTitle && (
        <div style={titleBoxStyle}>
          {pageTitle.split('\n').map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
