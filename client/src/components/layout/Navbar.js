import React from "react";
import "../../styles/Layout.css"

const Navbar = ({isAuthenticated, setAuth, role}) => {

    const logout = (e) => {
        e.preventDefault();

        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("user_id");
        setAuth(false);
    }

    return (
        <div classname="navbar">
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" class="checkbtn">
                 <i class="fa fa-bars" aria-hidden="true"></i>
                </label>
                <a className="logo" href="/">LMEZZ</a>
                    <ul>
                        <li><a href="/analyse">Elemezz!</a></li>
                        <li><a href="/about">Rólunk</a></li>
                        <li><a href="/menu">Menü</a></li>
                        {
                            role == 3 && isAuthenticated ? 
                                <li><a href="/teachers">Tanároknak</a></li>
                            :
                                ""
                        }
                        {
                            isAuthenticated ? 
                                <li><a href="/dashboard">Profil</a></li>
                            :
                                ""
                        }
                        {
                            isAuthenticated ? 
                                <li><a href="/" onClick={e => logout(e)}>Kilépés</a></li>
                            :
                                <>
                                    <li><a href="/login">Belépés</a></li>
                                    <li><a href="/register">Regisztráció</a></li>
                                </>
                        }
                    </ul>
                    
            </nav>
        </div>
    )
}
export default Navbar;