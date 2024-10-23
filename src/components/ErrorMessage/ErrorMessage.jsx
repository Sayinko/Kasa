import {Link} from "react-router-dom";
import "./errorMessage.scss";

function ErrorMessage() {
    return (
        <div className="containerError">
            <h1 className="containerError__title">404</h1>
            <p className="containerError__description">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="containerError__home">Retournez sur la page d'accueil</Link>
        </div>
    )
}

export default ErrorMessage