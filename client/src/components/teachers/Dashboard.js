import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import * as moment from 'moment'

import "./teachers.css"

const Dashboard = ({setAuth}) => {
    const [teacher, setTeacher] = useState("");
    
    async function getTeacher() {
        try {
            const response = await fetch("http://localhost:5000/dashboard", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json()
            parseRes.date_of_birth = moment(parseRes.date_of_birth).format('YYYY. MM. DD.');
            setTeacher(parseRes)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getTeacher();
    }, []);

    const logout = (e) => {
        e.preventDefault();

        localStorage.removeItem("token");
        setAuth(false);
    }

    return (
        <>
                <p>Név: {teacher.name}</p>
                <p>Email cím: {teacher.email}</p>
                <p>Születési dátum: {teacher.date_of_birth}</p>
                <p>Nem: {teacher.gender}</p>
                <p>Város: {teacher.city}</p>

                <button className="btn btn-primary logout-button"><Link to="/update">Profil szerkesztése</Link></button>
        </>
    )
}
export default Dashboard;