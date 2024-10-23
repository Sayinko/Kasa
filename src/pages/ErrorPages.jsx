import ErrorMessage from "../components/ErrorMessage/ErrorMessage"
import Header from "../components/Header/Header";
import "../styles/app.scss";
import Footer from "../components/Footer/Footer";


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