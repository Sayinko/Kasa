import logements from "../../datas/logements.json";
import { useParams } from "react-router-dom";
import Carrousel from "../Carrousel/Carrousel";
import "./cardLogement.scss";
import InfosLocation from "../InfosLocation/InfosLocation";
import Collapse from "../Collapse/Collapse";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function CardLogement() {
  const { id } = useParams();
  if (!id) {
    return <ErrorMessage />
  }
  const logement = logements.find((logement) => logement.id === id);
  const host = logement?.host;
  const tags = logement?.tags;

  if (!logement) {
    return <ErrorMessage />;
  }

  const li = logement.equipments.map((equipment, index) => (
      <li key={equipment+index}>{equipment}</li> ))
  const equipments = <ul>{li}</ul>
  const description = <p>{logement.description}</p>

  return (
    <div className="card">
      <Carrousel pictures={logement.pictures} title={logement.title}/>
      <InfosLocation title={logement.title} location={logement.location} nameHost={host.name} pictureHost={host.picture} tags={tags} rating={logement.rating}/>
      <div className="containerDetails">
        <Collapse description={description} title="Description" className="card"/>
        <Collapse description={equipments} title="Équipements" className="card"/>
      </div>
    </div>
  );
}

export default CardLogement;
