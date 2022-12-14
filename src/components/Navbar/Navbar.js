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
        className={classNames(` ${styles["navbar__toggle"]} flex`, {
          [styles["navbar__toggle--is-open"]]: isNavMenuOpen,
        })}
        onClick={toggleDropdown}
      >
        <div className={`${styles["navbar__hamburger"]} flex`}>
          <span className={styles["navbar__line"]}></span>
          <span className={styles["navbar__line"]}></span>
          <span className={styles["navbar__line"]}></span>
        </div>
        <p className={styles["navbar__text"]}>Menu</p>
      </button>
      <ul className={styles["navbar__links"]}>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={styles["navbar__link"]} href="#">
            Home
          </a>
        </li>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={styles["navbar__link"]} href="#">
            Blog
          </a>
        </li>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={styles["navbar__link"]} href="#">
            Events
          </a>
        </li>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={styles["navbar__link"]} href="#">
            Gallery
          </a>
        </li>
      </ul>
    </nav>
  );
};
