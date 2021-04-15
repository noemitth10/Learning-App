import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

import Dashboard from "./teachers/Dashboard"
import "./teachers/teachers.css"

const JustForTeachers = ({setAuth}) => {

    return (
        <>
            <div className="title-container">
                <h1>Tanároknak</h1>
            </div>
            <div className="teachers-container">
               <h3>Saját adataim</h3>
                    <Dashboard/>
               <h3>Feladatlap hozzáadása</h3>
               <button className="btn btn-primary logout-button"><Link to="/edit-test">Új teszt</Link></button>
               <p></p>
               <h3>Saját feladatlapok megtekintése</h3>
               <p></p>
               <h3>Diákjaim</h3>
               <p></p>
            </div>
        </>
    )
}

export default JustForTeachers;