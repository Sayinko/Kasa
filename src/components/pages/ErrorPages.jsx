import ErrorMessage from "../ErrorMessage"
import Header from "../Header"
import "../../styles/app.css";
import Footer from "../Footer";


function ErrorPages() {
    return (
        <>
        <div className="container-body">
            <Header />
            <ErrorMessage />
        </div>
        <Footer />
        </>
    )
}

export default ErrorPages