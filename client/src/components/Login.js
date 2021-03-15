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
            localStorage.setItem("token", parseRes.token)
            setAuth(true);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
    <>
        <div className="title-container">
            <h1>Belépés</h1>
        </div>
        <div className="form-container">
            <form onSubmit={onSubmitForm}>
                <input type="email" name="email" placeholder="Email" className="form-control my-3" value={email} onChange={e =>onChange(e)}/>
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