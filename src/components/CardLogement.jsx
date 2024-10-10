import logements from "../datas/logements.json";
import { useParams } from "react-router-dom";
import Carrousel from "./Carrousel";
import "../styles/cardLogement.css";
import InfosLocation from "./InfosLocation";
import Details from "./Details";

function CardLogement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  const host = logement.host;
  const tags = logement.tags;

  if (!logement) {
    return <p>Logement non trouvé.</p>;
  }

  return (
    <div className="card">
      <Carrousel pictures={logement.pictures} title={logement.title}/>
      <InfosLocation title={logement.title} location={logement.location} nameHost={host.name} pictureHost={host.picture} tags={tags} rating={logement.rating}/>
      <Details equipments={logement.equipments} description={logement.description} />
    </div>
  );
}

export default CardLogement;
