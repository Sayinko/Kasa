import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <img src={logo} className="navbar__img" alt="Logo de Kasa" />
        <ul className="navbar__links">
          <li className="navbar__links--item">
            <Link className="link" to="/">
              Accueil
            </Link>
          </li>
          <li className="navbar__links--item">
            <Link className="link" to="/about">
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
