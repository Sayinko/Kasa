import seahome from "./Images/seahome.png";
import BackgroundImg from "../BackgroundImg/BackgroundImg";
import "./sectionOne.scss";

function SectionOne() {
  return (
    <section className="container">
      <div className="container__items">
        <BackgroundImg src={seahome} alt="Des vagues s'écrasant sur les rochers"/>
        <span className="container__items--text">
          Chez vous, <br className="br" /> partout et ailleurs
        </span>
      </div>
    </section>
  );
}

export default SectionOne;
