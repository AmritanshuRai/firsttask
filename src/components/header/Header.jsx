import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header__nav">
      <Link to="/">
        <h4>Task one</h4>
      </Link>
      <Link to="/tasktwo">
        <h4>Task two</h4>
      </Link>
    </header>
  );
};

export default Header;
