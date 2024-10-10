import seahome from "../assets/seahome.png";
import "../styles/sectionOne.css";

function SectionOne() {
  return (
    <section className="container">
      <div className="container__items">
        <img src={seahome} className="container__items--img" />
        <span className="container__items--text">
          Chez vous, <br className="br" /> partout et ailleurs
        </span>
      </div>
    </section>
  );
}

export default SectionOne;
