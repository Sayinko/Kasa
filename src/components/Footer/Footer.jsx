import "./footer.scss";
import logo from "./Images/logofooter.png";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
