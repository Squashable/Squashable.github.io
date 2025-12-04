import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const pageMap = {
  "/": "Welcome to My Portfolio\nJoshua Hudgell BEng(Hons) Mechatronics Engineering ",
  "/artificial": "My Stance on AI Use",
  "/turret": "Turret",
  "/model-rail": "Model Rail",
  "/website-project": "Website Building",
  "/project04": "Future Project 4",
  "/project05": "Future Project 5",
  "/project06": "Future Project 6",
  "/project07": "Future Project 7",
  "/project08": "Future Project 8",
  "/project09": "Future Project 9",
  "/project10": "Future Project 10",
  "/uni-project01": "Year 1 : Automated bin",
  "/uni-project02": "University Project 2",
  "/uni-project03": "University Project 3",
  "/uni-project04": "University Project 4",
  "/uni-project05": "University Project 5",
  "/uni-project06": "University Project 6",
  "/uni-project07": "University Project 7",
  "/uni-project08": "University Project 8",
  "/uni-project09": "University Project 9",
  "/uni-project10": "University Project 10"
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
  const [uniDropdownOpen, setUniDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const uniDropdownRef = useRef(null);
  const location = useLocation();
  const currentPath = location.pathname;
  const pageTitle = pageMap[currentPath] || "";

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Close uni dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (uniDropdownRef.current && !uniDropdownRef.current.contains(event.target)) {
        setUniDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [uniDropdownRef]);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className={currentPath === "/" ? "active" : ""}>Home</Link>
        <Link to="/artificial" className={currentPath === "/artificial" ? "active" : ""}>AI Perspective</Link>
        <div className="dropdown" ref={dropdownRef}>
          <button className="dropbtn" onClick={() => {
            setDropdownOpen(!dropdownOpen);
            setUniDropdownOpen(false);
          }}>
            Personal Projects
            <svg width="18" height="18" viewBox="0 0 20 20" style={{ verticalAlign: "middle", marginLeft: 6 }} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 8l4 4 4-4" stroke="#222c44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <Link to="/turret" onClick={() => setDropdownOpen(false)}>Turret</Link>
              <Link to="/model-rail" onClick={() => setDropdownOpen(false)}>Model Rail</Link>
              <Link to="/website-project" onClick={() => setDropdownOpen(false)}>Website Building</Link>  
              <Link to="/project04" onClick={() => setDropdownOpen(false)}>Future Project 04</Link>
              <Link to="/project05" onClick={() => setDropdownOpen(false)}>Future Project 05</Link>
              <Link to="/project06" onClick={() => setDropdownOpen(false)}>Future Project 06</Link>
              <Link to="/project07" onClick={() => setDropdownOpen(false)}>Future Project 07</Link>
              <Link to="/project08" onClick={() => setDropdownOpen(false)}>Future Project 08</Link>
              <Link to="/project09" onClick={() => setDropdownOpen(false)}>Future Project 09</Link>
              <Link to="/project10" onClick={() => setDropdownOpen(false)}>Future Project 10</Link>
            </div>
          )}
        </div>
        <div className="dropdown" ref={uniDropdownRef}>
          <button className="dropbtn" onClick={() => {
            setUniDropdownOpen(!uniDropdownOpen);
            setDropdownOpen(false);
          }}>
            University Projects
            <svg width="18" height="18" viewBox="0 0 20 20" style={{ verticalAlign: "middle", marginLeft: 6 }} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 8l4 4 4-4" stroke="#222c44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {uniDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/uni-project01" onClick={() => setUniDropdownOpen(false)}>Year 1 : Automated bin</Link>
              <Link to="/uni-project02" onClick={() => setUniDropdownOpen(false)}>University Project 02</Link>
              <Link to="/uni-project03" onClick={() => setUniDropdownOpen(false)}>University Project 03</Link>
              <Link to="/uni-project04" onClick={() => setUniDropdownOpen(false)}>University Project 04</Link>
              <Link to="/uni-project05" onClick={() => setUniDropdownOpen(false)}>University Project 05</Link>
              <Link to="/uni-project06" onClick={() => setUniDropdownOpen(false)}>University Project 06</Link>
              <Link to="/uni-project07" onClick={() => setUniDropdownOpen(false)}>University Project 07</Link>
              <Link to="/uni-project08" onClick={() => setUniDropdownOpen(false)}>University Project 08</Link>
              <Link to="/uni-project09" onClick={() => setUniDropdownOpen(false)}>University Project 09</Link>
              <Link to="/uni-project10" onClick={() => setUniDropdownOpen(false)}>University Project 10</Link>
            </div>
          )}
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
