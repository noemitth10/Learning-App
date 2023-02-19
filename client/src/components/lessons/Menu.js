import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

import "../../styles/Themes.css"
import iconImage from "./image_2.png";

const Menu = (props) => { 
    const [lessons, setLessons] = useState([]);
   
    const getLessons = async() => {
        try {

            const response = await fetch("http://localhost:5000/lessons")
            const jsonData = await response.json()
            setLessons(jsonData);
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getLessons();
    }, []);

    return (
        <>
            <div className="title-container">
                <h1>Menü</h1>
            </div>
                {
                    lessons.length == 0 && 
                    <p style={{padding: "2%"}}>Nincsenek megjeleníthető leckék.</p>
                }
                {lessons.map(lesson => (
                  <div className="menu-points">
                    <div className="menu-left">
                        <img src={iconImage} className="icon-image" alt="Lecke"/>
                    </div>
                    <div className="menu-right">
                        <h2>
                            <Link
                                to={{
                                    pathname: `/lesson-${lesson.lesson_id}`,
                                    state: { category: lesson.category, 
                                        text_of_lesson: lesson.text_of_lesson }
                                }}
                            >{lesson.category}</Link>
                        </h2>
                    </div>
                  </div>  
                ))}
        </>
    )
}
export default Menu;