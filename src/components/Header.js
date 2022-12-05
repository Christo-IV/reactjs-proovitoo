import "./Header.css";

const Header = ({ title }) => {
  return (
    <div className="header">
      <h2 className="heading">{title}</h2>
      <span className="divider"></span>
    </div>
  );
};

export default Header;
