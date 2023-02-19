import { Link } from "react-router-dom";
import book_logo from "../styles/images/book.png";

const Main = () => {

    return (
        <>
            <div className="main-container">
                    <div>
                        <img
                            src={book_logo}
                            alt="book logo"
                        />
                    </div>
                    <div className="text">
                        <p>
                            Nehezen megy a magyar nyelvtan? Nem tudod,
                            hogyan kellene a mondatokat elemezni? Tanulj az LMEZZ-el, egy olyan alkalmazással,
                            ami változatos feladattípusokon keresztül végig vezet a mondatelemzés rejtelmein.
                        </p>
                    </div>
                    <div className="buttons">
                        <div>
                            <Link to="/analyse" className="btn">Elemezz!</Link>
                        </div>
                        <div>
                            <Link to="/login" className="btn">Jelentkezz be</Link>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default Main;