import "../styles/infosLocation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from "prop-types";
import { faStar } from '@fortawesome/free-solid-svg-icons';

function InfosLocation({title, location, nameHost, pictureHost, tags, rating}) {
    const ratingNumber = Number(rating)
    const stars = []

    for(let i = 0; i < ratingNumber; i++) {
        stars.push(<FontAwesomeIcon key={`star-${i}`} icon={faStar} className="star"/>)
    }

    for(let i = ratingNumber; i < 5; i++) {
        stars.push(<FontAwesomeIcon key={`starGrey-${i}`} icon={faStar} className="starGrey"/>)
    }


    return (
        <div className="containerLocation">
            <div className="containerLocation__infos">
                <div className="containerLocation__infos--title">
                    <h1>{title}</h1>
                    <p>{location}</p>
                    <div className="tags">
                        {tags.map((tag) => (
                            <p key={tag}>{tag}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="containerLocation__description">
            <div className="containerLocation__description--name">
                    <p>{nameHost}</p>
                    <img src={pictureHost} alt="L'hôte"/>
                </div>
                <div className="containerLocation__description--stars">
                    {stars}
                </div>
            </div>
        </div>
    )
}

InfosLocation.propTypes = {
    title : PropTypes.string.isRequired,
    location : PropTypes.string.isRequired,
    nameHost : PropTypes.string.isRequired,
    pictureHost : PropTypes.string.isRequired,
    tags : PropTypes.arrayOf(PropTypes.string).isRequired,
    rating : PropTypes.string.isRequired
}

export default InfosLocation;