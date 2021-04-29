import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Layout.css"
import "../styles/Authentication.css"

const Login = ({setAuth}) => {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const { email, password } = inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
        if (e.target.name == "email") document.getElementById("email-error").style.display = "none";
        else document.getElementById("password-error").style.display = "none";
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const body = { email, password };

            const response =  await fetch("http://localhost:5000/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();
            if(parseRes == "Email is incorrect." || parseRes == "Password is incorrect." || parseRes == "Missing Credentials") {
                showErrorMessage(parseRes);
                return;
            }

            localStorage.setItem("token", parseRes.token)
            setAuth(true);
        } catch (error) {
            console.error(error.message);
        }
    }

    function showErrorMessage(message) {
        if(message == "Email is incorrect.") document.getElementById("email-error").style.display = "block";
        if(message == "Password is incorrect.") document.getElementById("password-error").style.display = "block";
        if(message == "Missing Credentials") document.getElementById("missing-error").style.display = "block";
    }

    return (
    <>
        <div className="title-container">
            <h1>Belépés</h1>
        </div>
        <div className="form-container">
            <form onSubmit={onSubmitForm}>
                <span id="missing-error" className="error-message">Hiányzó adatok. Kérem adja meg az email címét és a jelszót.</span>
                <span id="email-error" className="error-message email">Helytelen email címet adott meg. Próbálja újra.</span>
                <input type="email" name="email" placeholder="Email" className="form-control my-3" value={email} onChange={e =>onChange(e)}/>
                <span id="password-error" className="error-message password">Helytelen jelszót adott meg. Próbálja újra.</span>
                <input type="password" name="password" placeholder="Jelszó" className="form-control my-3" value={password} onChange={e =>onChange(e)}/>
                <button className="btn btn-left btn btn-success">Belépés</button>
                <div  className="link">
                Még nincs felhasználód? <Link to="/register"><p className="p-link">Kattints ide...</p></Link>
                </div>
            </form>
        </div>
    </>
    )
}
export default Login;