import styles from "./Navbar.module.scss";
import { useState } from "react";
import classNames from "classnames";

export const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  return (
    <nav className={`${styles["navbar"]} flex`}>
      <button
        className={classNames(` ${styles["toggle"]} flex`, {
          [styles["toggle--is-open"]]: isNavMenuOpen,
        })}
        onClick={toggleDropdown}
      >
        <div className={`${styles["hamburger"]} flex`}>
          <span className={styles["hamburger__line"]}></span>
          <span className={styles["hamburger__line"]}></span>
          <span className={styles["hamburger__line"]}></span>
        </div>
        <p className={styles["toggle__text"]}>Menu</p>
      </button>
      <ul className={styles["links"]}>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={styles["links__link"]} href="#">
            Home
          </a>
        </li>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={styles["links__link"]} href="#">
            Blog
          </a>
        </li>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={styles["links__link"]} href="#">
            Events
          </a>
        </li>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={styles["links__link"]} href="#">
            Gallery
          </a>
        </li>
      </ul>
    </nav>
  );
};
