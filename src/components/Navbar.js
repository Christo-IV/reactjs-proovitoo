import "./Navbar.css";

const Navbar = () => {
  const toggleDropdown = (event) => {
    event.currentTarget.classList.toggle("is-open");
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
      </nav>
    </header>
  );
};

export default Navbar;
