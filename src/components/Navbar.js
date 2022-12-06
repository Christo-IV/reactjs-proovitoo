import "./Navbar.css";
import classNames from "classnames";
import { useState } from "react";

const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  return (
    <header>
      <nav className="navbar flex">
        <div className="nav-content">
          <button
            className={classNames("hamburger-toggle flex", {
              "is-open": isNavMenuOpen,
            })}
            onClick={toggleDropdown}
          >
            <div className="hamburger-lines flex">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </div>
            <p className="hamburger-text">Menu</p>
          </button>
          <ul className="nav-links">
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
