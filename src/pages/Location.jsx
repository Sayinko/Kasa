import Header from "../components/Header/Header";
import CardLogement from "../components/CardLogement/CardLogement";
import "../styles/app.scss";
import Footer from "../components/Footer/Footer";

function Location() {
  return (
    <>
    <div className="container-body">
      <Header />
      <CardLogement />
    </div>
    <Footer />
    </>
  );
}

export default Location;
