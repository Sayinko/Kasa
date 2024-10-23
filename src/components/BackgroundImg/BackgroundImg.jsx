import "./backgroundImg.scss";
import PropTypes from "prop-types";

function BackgroundImg({src, alt}) {
    return (
        <img src={src} className="img-background" alt={alt}/>
    )
}

BackgroundImg.propTypes = {
    src : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

export default BackgroundImg