import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

import Dashboard from "./teachers/Dashboard"
import MyTestList from "./teachers/MyTestList"

import "./teachers/teachers.css"

const JustForTeachers = ({setAuth}) => {

    return (
        <>
            <div className="title-container">
                <h1>Tanároknak</h1>
            </div>
            <div className="teachers-container" style={{paddingLeft: "2%"}}>
                <div style={{display: "inline-block", width: "100%", marginTop: "1%", marginBottom: "1%"}}>
                    <div style={{float: "left", width: "30%"}}> 
                        <h3>Feladatlap hozzáadása</h3>
                    </div>
                    <div style={{float: "right", width: "70%"}}>
                        <button style={{float: "left", width: "30%"}} className="btn btn-primary"><Link to="/edit-test">Új teszt</Link></button>
                    </div>
                </div>
               
               <h3>Saját feladatlapok megtekintése</h3>
               <MyTestList/>
            </div>
        </>
    )
}

export default JustForTeachers;