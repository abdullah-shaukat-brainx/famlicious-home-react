import logo from "../../../assets/images/main-logo.png";
import { Link } from "react-router-dom";

import "./Header.css";
function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header-logo-image" src={logo} alt="Famlicious Logo" />
      </Link>
      <div>
        <Link to="mailto:help@famlicious.com">
          <i className="fa fa-envelope envelope-icon"></i>help@famlicious.com
        </Link>
      </div>
    </header>
  );
}

export default Header;
