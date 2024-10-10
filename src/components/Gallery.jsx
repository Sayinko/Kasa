import { useNavigate } from "react-router-dom";
import logements from "../datas/logements.json";
import "../styles/gallery.css";

function Gallery() {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`location/${id}`);
  };

  return (
    <section className="gallery">
      {logements.map((logement) => (
        <div
          key={logement.id}
          className="gallery__item"
          onClick={() => handleClick(logement.id)}
        >
          <img
            src={logement.cover}
            alt={logement.title}
            className="gallery__item--img"
          />
          <p className="gallery__item--description">{logement.title}</p>
        </div>
      ))}
    </section>
  );
}

export default Gallery;
