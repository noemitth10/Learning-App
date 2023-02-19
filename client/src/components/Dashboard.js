import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import * as moment from 'moment'

import "../styles/User_profile.css"

const Dashboard = ({setAuth}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [points, setPoints] = useState(0);

    async function getName() {
        try {
            const response = await fetch("http://localhost:5000/dashboard", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json()
            setName(parseRes.name)
            setEmail(parseRes.email)
            setUser(parseRes);
            const date = moment(parseRes.date_of_birth).format('YYYY. MM. DD.');
            setBirthDate(date);
            localStorage.setItem("role", parseRes.role_id);
            localStorage.setItem("name", parseRes.name)
            localStorage.setItem("user_id", parseRes.user_id)
            parseRes.points === null || parseRes.points === 0 ? setPoints(0) : setPoints(parseRes.points);
            localStorage.setItem("points", points);
            localStorage.setItem("user", JSON.stringify(user));
        } catch (error) {
            console.error(error.message)
        }
    }

    const logout = (e) => {
        e.preventDefault();

        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("user_id");
        setAuth(false);
    }

    useEffect(() => {
        getName();
    });
    
    return (
    <>
        <div className="title-container">
            <h1>Helló, {name}</h1>
        </div>
        <div className="container-right">
            <div className="image">
                <img src="http://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="Userpicture"/>
            </div>
            <div className="buttons">
                <button className="btn btn-primary logout-button"><Link to="/update">Profil szerkesztése</Link></button>
                <button className="btn btn-primary logout-button" onClick={e => logout(e)}>Kilépés</button>
            </div>
            
        </div>
        <div className="container-left">
            <h2>Személyes adatok</h2>
            <p><b>Email cím:</b> {user.email}</p>
            <p><b>Születési dátum:</b> {birthDate}</p>
            <p><b>Nem:</b> {user.gender}</p>
            <p><b>Város:</b> {user.city}</p>
            <p><b>Pontok:</b> { localStorage.points === 0 ? "0 pont" : localStorage.points + " pont"}</p>    

            {
                localStorage.role != 3 ?
                <>
                    <h2>Kezdd el a tanulást!</h2>
                    <button className="btn btn-primary start-btn"><Link to="/menu">Kattints ide...</Link></button>
                </> :
                <>
                <h2>Kezdd el a tanítást!</h2>
                <button className="btn btn-primary start-btn"><Link to="/teachers">Kattints ide...</Link></button>
            </>
            }
            
        </div>
    </>
    )
}
export default Dashboard;