import { useState, useRef, useEffect } from "react";
import arrowBack from "./images/arrow_back.png";
import "./details.scss";
import PropTypes from "prop-types";

function Collapse({description, title, className, aboutContent}) {

    const [visibleDescription, setVisibleDescription] = useState(false)
    const collapseRef = useRef(null)
    const [height, setHeight] = useState("0px")

    const handleClickDescription = () => {
        setVisibleDescription((setvis) => !setvis)
    }

    useEffect (() => {
        if(collapseRef.current) {
            const newHeight = collapseRef.current.scrollHeight
            setHeight(newHeight)
        }
    }, [visibleDescription])

    return (
            <div className={`containerCollapse ${className}`}>
                <div className="containerCollapse__topbar" >
                    <p>{title}</p>
                    <button onClick={handleClickDescription}>
                        <img src={arrowBack} className={visibleDescription ? "rotate" : "rotateInverse"} alt="flèche de retour"/>
                    </button>
                </div>
                <div ref={collapseRef} className={`toggleDescription ${aboutContent} ${visibleDescription ? 'visible' : 'hidden'}` } style={{maxHeight: visibleDescription ? height : "0px", overflow:"hidden", transition: "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out"}}>
                    {description}
                </div>
            </div>

    )
}

Collapse.propTypes = {
    title : PropTypes.string.isRequired,
    description : PropTypes.node.isRequired,
    className : PropTypes.string,
    aboutContent : PropTypes.string
}

export default Collapse;