import Gallery from "../Gallery";
import Header from "../Header";
import SectionOne from "../SectionOne";
import "../../styles/app.css";
import Footer from "../Footer";

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
