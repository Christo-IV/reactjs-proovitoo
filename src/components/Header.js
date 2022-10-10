import "./Header.css";

const Header = ({ title }) => {
  return (
    <div className="header">
      <h1 className="heading">{title}</h1>
      <span className="divider"></span>
    </div>
  );
};

export default Header;
