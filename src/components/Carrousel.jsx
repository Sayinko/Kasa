import { useState } from "react";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png"
import "../styles/carrousel.css"

function Carrousel({pictures, title}) {
  
    const [img, setImg] = useState(0)
    const [number, setNumber] = useState(1)
  
    const handleClickRight = () => {
      setImg((imgIndex) => imgIndex === pictures.length -1 ? 0 : imgIndex + 1)
      setNumber((number) => number < pictures.length ? number + 1 : 1)
    }
    
    const handleClickLeft = () => {
      setImg((imgIndex) => imgIndex ===  0 ? pictures.length -1 : imgIndex - 1)
      setNumber((number) => number === 1 ? pictures.length : number - 1)
    }
    return (
        <>
        <div className="card__container">
            <img
                src={pictures[img]}
                alt={title}
                className="card__container--img"
            />
            {pictures.length > 1 && ( 
            <> 
                <img
                    src={arrowLeft}
                    alt="Flèche de gauche"
                    className="card__container--arrowLeft"
                    onClick = {handleClickLeft}
                />
                <img
                    src={arrowRight}
                    alt="Flèche de droite"
                    className="card__container--arrowRight"
                    onClick = {handleClickRight}
                /> 
            </>)}
            <span>{number}/{pictures.length}</span>
        </div>
      </>
    )
}

export default Carrousel