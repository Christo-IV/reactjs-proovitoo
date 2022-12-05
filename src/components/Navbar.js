import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [display, setDisplay] = useState("none");

  const toggleDropdown = () => {
    if (display === "none") {
      setDisplay("flex");
    } else {
      setDisplay("none");
    }
  };

  return (
    <header>
      <nav className="navbar flex">
        <div className="nav-content">
          <button className="hamburger-toggle flex" onClick={toggleDropdown}>
            <div className="hamburger-lines flex">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </div>
            <p className="hamburger-text">Menu</p>
          </button>
          <ul className="nav-links" style={{ display: display }}>
            <li className="nav-link">
              <a href="#">Home</a>
            </li>
            <li className="nav-link">
              <a href="#">Blog</a>
            </li>
            <li className="nav-link">
              <a href="#">Events</a>
            </li>
            <li className="nav-link">
              <a href="#">Gallery</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
