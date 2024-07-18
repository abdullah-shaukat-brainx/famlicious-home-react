import logo from "../../../assets/images/main-logo.png";
import { Link } from "react-router-dom";

import "./Header.css";
function Header() {
  return (
    <header className="header">
      <a href="/">
        <img className="header-logo-image" src={logo} alt="Famlicious Logo" />
      </a>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <a href="mailto:help@famlicious.com">
          <i className="fa fa-envelope envelope-icon"></i>help@famlicious.com
        </a>
      </div>
    </header>
  );
}

export default Header;
