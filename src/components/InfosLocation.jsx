import "../styles/infosLocation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function InfosLocation({title, location, nameHost, pictureHost, tags, rating}) {
    const ratingNumber = Number(rating)
    const stars = []

    for(let i = 0; i < ratingNumber; i++) {
        stars.push(<FontAwesomeIcon icon={faStar} className="star"/>)
    }

    for(let i = ratingNumber; i < 5; i++) {
        stars.push(<FontAwesomeIcon icon={faStar} className="starGrey"/>)
    }


    return (
        <div className="containerLocation">
            <div className="containerLocation__infos">
                <div className="containerLocation__infos--title">
                    <h1>{title}</h1>
                    <p>{location}</p>
                </div>
                <div className="containerLocation__infos--name">
                    <p>{nameHost}</p>
                    <img src={pictureHost} alt="Photo de l'hôte"/>
                </div>
            </div>
            <div className="containerLocation__description">
                <div className="containerLocation__description--filters">
                    {tags.map((tag, index) => (
                        <p key={`tag${index}`}>{tag}</p>
                    ))}
                </div>
                <div className="containerLocation__description--stars">
                    {stars}
                </div>
            </div>
        </div>
    )
}

export default InfosLocation;