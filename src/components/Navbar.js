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
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">Home</a>
          </li>
          <li className="nav-link">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">Blog</a>
          </li>
          <li className="nav-link">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">Events</a>
          </li>
          <li className="nav-link">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">Gallery</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
