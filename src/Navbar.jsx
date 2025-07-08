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
  "/project10": "Future Project 10"
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
  const dropdownRef = useRef(null);
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

  return (
    <>
      <nav className="navbar">
        <Link to="/" className={currentPath === "/" ? "active" : ""}>Home</Link>
        <Link to="/artificial" className={currentPath === "/artificial" ? "active" : ""}>AI Perspective</Link>
        <div className="dropdown" ref={dropdownRef}>
          <button className="dropbtn" onClick={() => setDropdownOpen(!dropdownOpen)}>
            Projects
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
