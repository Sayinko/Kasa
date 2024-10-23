import "../styles/app.scss";
import listAbout from "../datas/aboutList.json";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import montainView from "../assets/montainView.png";
import BackgroundImg from "../components/BackgroundImg/BackgroundImg";
import Collapse from "../components/Collapse/Collapse";

function About() {
  return (
    <>ss
      <div className="container-body">
        <Header />
        <BackgroundImg
          src={montainView}
          alt="Montagne enneigée au loin avec une forêt en premier plan"
        />
        <div className="container-about">
          {listAbout.map((list) => (
            <Collapse
              key={list.title}
              description={list.content}
              title={list.title}
              className="styleAbout"
              aboutContent="aboutContent"
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
