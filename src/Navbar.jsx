import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const pageMap = {
  "website-home.html": "Welcome to My Portfolio\nJoshua Hudgell BEng(Hons) Mechatronics Engineering ",
  "Artifical.html": "My Stance on AI Use",
  "website-turret.html": "Turret",
  "website-model-rail.html": "Model Rail",
  "website-project.html": "Website Building"
};

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const currentPage = window.location.pathname.split("/").pop();

  return (
    <nav className="navbar">
      <Link to="/" className={currentPage === "" ? "active" : ""}>Home</Link>
      <Link to="/Artifical" className={currentPage === "Artifical" ? "active" : ""}>AI Perspective</Link>
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
  );
};

export default Navbar;
