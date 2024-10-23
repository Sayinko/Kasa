import Gallery from "../components/Gallery/Gallery";
import Header from "../components/Header/Header";
import SectionOne from "../components/SectionOne/SectionOne";
import "../styles/app.scss";
import Footer from "../components/Footer/Footer";

function Index() {
  return (
    <>
      <div className="container-body">
        <Header />
        <SectionOne />
        <Gallery />
      </div>
      <>
        <Footer />
      </>
    </>
  );
}

export default Index;
