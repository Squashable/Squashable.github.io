import React, { useState } from "react";
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
      <a href="/" className={currentPage === "" ? "active" : ""}>Home</a>
      <a href="/Artifical" className={currentPage === "Artifical" ? "active" : ""}>AI Perspective</a>
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
          <a href="website-turret.html">Turret</a>
          <a href="website-model-rail.html">Model Rail</a>
          <a href="website-project.html">Website Building</a>
          <a href="Project04.html">Future Project 04</a>
          <a href="Project05.html">Future Project 05</a>
          <a href="Project06.html">Future Project 06</a>
          <a href="Project07.html">Future Project 07</a>
          <a href="Project08.html">Future Project 08</a>
          <a href="Project09.html">Future Project 09</a>
          <a href="Project10.html">Future Project 10</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
