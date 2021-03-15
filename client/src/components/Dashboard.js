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
            <img src="http://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="Userpicture"/>
            <div className="buttons">
                <button className="btn btn-primary logout-button"><Link to="/update">Profil szerkesztése</Link></button>
                <button className="btn btn-primary logout-button" onClick={e => logout(e)}>Kilépés</button>
            </div>
            
        </div>
        <div className="container-left">
            <h2>Személyes adatok</h2>
            <p>Email cím: {user.email}</p>
            {console.log(user.date_of_birth)}
            <p>Születési dátum: {birthDate}</p>
            <p>Nem: {user.gender}</p>
            <p>Város: {user.city}</p>
            <p>Pontok: { localStorage.points === 0 ? "0 pont" : localStorage.points + " pont"}</p>    

            <h2>Kezdd el a tanulást!</h2>
            <button className="btn btn-primary"><Link to="/menu">Kattints ide...</Link></button>
        </div>
    </>
    )
}
export default Dashboard;