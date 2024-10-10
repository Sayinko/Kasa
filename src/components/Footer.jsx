import "../styles/footer.css";
import logo from "../assets/logofooter.png";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
