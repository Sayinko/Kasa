import "../../styles/app.css";
import listAbout from "../../datas/aboutList.json";
import Footer from "../Footer"
import Header from "../Header";
import montainView from "../../assets/montainView.png";
import BackgroundImg from "../BackgroundImg";
import Collapse from "../Collapse";

function About() {
  return (
<>
    <div className="container-body">
      <Header />
      <BackgroundImg src={montainView} alt="Montagne enneigée au loin avec une forêt en premier plan"/>
      <div className="container-about">
        {listAbout.map((list) => (
          <Collapse key={list.title} description={list.content} title={list.title} className="styleAbout" aboutContent="aboutContent"/>
        ))}
      </div>
    </div>
        <Footer />
    </>

  );
}

export default About;
