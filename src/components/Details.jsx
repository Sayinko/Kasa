import { useState } from "react";
import arrowBack from "../assets/arrow_back.png";
import "../styles/details.css";

function Details({equipments, description}) {

    const [visibleDescription, setVisibleDescription] = useState(false)
    const [visibleEquipment, setVisibleEquipment] = useState(false)

    const handleClickDescription = () => {
        setVisibleDescription((setvis) => !setvis)
    }

    const handleClickEquipment = () => {
        setVisibleEquipment((setvis) => !setvis)
    }


    return (
        <div className="containerDetails">
            <div className="containerDetails__descriptTopbar">
            <div className="containerDetails__topbar" >
                <p>Description</p>
                <img src={arrowBack} alt="flèche de retour" onClick={handleClickDescription}/>
            </div>
            <div className={`toggleDescription ${visibleDescription ? 'visible' : 'hidden'}`}>
                <p>{description}</p>
            </div>
            </div>
            <div className="containerDetails__descriptTopbar">
            <div className="containerDetails__topbar">
                <p>Équipements</p>
                <img src={arrowBack} alt="flèche de retour" onClick={handleClickEquipment} />
            </div>
            <div className={`toggleEquipment ${visibleEquipment ? 'visible' : 'hidden'}`}>
                <ul>
                {equipments.map((equipment, index) => (
                    <li key={`equipments${index}`}>{equipment}</li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Details;