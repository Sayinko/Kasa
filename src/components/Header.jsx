import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/">
        <img src={logo} className="navbar__img" alt="Logo de Kasa" />
        </Link>
        <ul className="navbar__links">
          <li className="navbar__links--item">
            <NavLink className="link" to="/">
              Accueil
            </NavLink>
          </li>
          <li className="navbar__links--item">
            <NavLink className="link" to="/about">
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
