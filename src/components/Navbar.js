import "./Navbar.css";
import { useState } from "react";

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
            <button>Home</button>
          </li>
          <li className="nav-link">
            <button>Blog</button>
          </li>
          <li className="nav-link">
            <button>Events</button>
          </li>
          <li className="nav-link">
            <button>Gallery</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
