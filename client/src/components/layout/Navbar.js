import React from "react";
import "../../styles/Layout.css"

const Navbar = ({isAuthenticated, setAuth}) => {

    const logout = (e) => {
        e.preventDefault();

        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setAuth(false);
    }

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
    }

    return (
        <>
            <nav>
                <div className="logo">
                    <a className="logo" href="/">LMEZZ</a>
                </div>
                    <a href="/about">Rólunk</a>
                    <a href="/menu">Menü</a>
                    {
                        isAuthenticated && localStorage.role == 3 ? 
                            <a href="/teachers">Tanároknak</a>  
                        :
                            ""
                    }
                    <a href="/dashboard">Profil</a>
                    {
                        isAuthenticated ? 
                            <a href="/" onClick={e => logout(e)}>Kilépés</a>   
                        :
                            <div>
                                <a href="/login">Belépés</a>
                            <a href="/register">Regisztráció</a>
                            </div>
                    }
            </nav>
        </>
    )
}
export default Navbar;