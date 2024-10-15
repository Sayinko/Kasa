import {Link } from "react-router-dom";
import logements from "../datas/logements.json";
import "../styles/gallery.css";

function Gallery() {
  return (
    <section className="gallery">
      {logements.map((logement) => (
        <article
          key={logement.id}
          className="gallery__item"
        > 
        <Link to={`/location/${logement.id}`}>
          <img
            src={logement.cover}
            alt={logement.title}
            className="gallery__item--img"
          />
          <h2 className="gallery__item--description">{logement.title}</h2>
          </Link>
        </article>
      ))}
    </section>
  );
}

export default Gallery;
