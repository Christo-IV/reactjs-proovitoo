import styles from "./Navbar.module.scss";
import { useState } from "react";
import classNames from "classnames";

export const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  return (
    <header>
      <nav className={`${styles["navbar"]} flex`}>
        <div className={styles["nav-content"]}>
          <button
            className={classNames(` ${styles["hamburger-toggle"]} flex`, {
              [styles["is-open"]]: isNavMenuOpen,
            })}
            onClick={toggleDropdown}
          >
            <div className={`${styles["hamburger-lines"]} flex`}>
              <span className={styles["hamburger-line"]}></span>
              <span className={styles["hamburger-line"]}></span>
              <span className={styles["hamburger-line"]}></span>
            </div>
            <p className={styles["hamburger-text"]}>Menu</p>
          </button>
          <ul className={styles["nav-links"]}>
            <li className={styles["nav-link"]}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#">Home</a>
            </li>
            <li className={styles["nav-link"]}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#">Blog</a>
            </li>
            <li className={styles["nav-link"]}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#">Events</a>
            </li>
            <li className={styles["nav-link"]}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#">Gallery</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
