import logements from "../datas/logements.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "../styles/cardLogement.css";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png"

function CardLogement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <p>Logement non trouvé.</p>; // Gérer le cas où le logement n'est pas trouvé
  }

  return (
    <div className="card">
      <div className="card__container">
        <img
          src={logement.cover}
          alt={logement.title}
          className="card__container--img"
        />
        <img
          src={arrowLeft}
          alt="Flèche de gauche"
          className="card__container--arrowLeft"
        />
        <img
          src={arrowRight}
          alt="Flèche de droite"
          className="card__container--arrowRight"
        />
      </div>
      <p>{logement.title}</p>
    </div>
  );
}

export default CardLogement;
