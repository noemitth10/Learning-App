import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"

import "../../styles/Themes.css"

const Theme = (props) => {
    const [testID, setTestid] = useState([
    {
        id: 1
    },
    {
        id: 2
    }
    ]);
    const [tasks, setTasks] = useState([]);
    const [alttasks, setAlttasks] = useState([]);
    const [otherTasks, setOtherTasks] = useState([]);
    let list = [];
    
    const getTasks = async() => {
        try {
            const response = await fetch("http://localhost:5000/tasks_with_answers")
            const jsonData = await response.json()

            setTasks(jsonData);
        } catch (error) {
            console.error(error.message)
        }
    }

      useEffect(() => {
        getTasks();
      }, []);


    function sortTestsByID(test_id) {
        console.log(tasks)
        tasks.map(task => {
          task.test_id === test_id && task.category === props.location.state.category ?
          list.push(task) : setOtherTasks(task)
        })
    }

    return (
        <>
            <div className="title-container">
                <h1>{props.location.state.category}</h1>
            </div>
            <div style={{padding: "1%"}}>
                <p>{props.location.state.text_of_lesson}</p>
                <h2>Tesztfeladatok</h2>
                {
                        tasks.length == 0 ? 
                        <p style={{padding: "2%"}}>Nincsenek megjeleníthető tesztfeladatok.</p>
                        :
                        testID.map(test => (
                            <>
                                <p>
                                    <Link
                                        onClick={(() => sortTestsByID(test.id))}
                                        to={{
                                            pathname: `/test-${test.id}`,
                                            state: { test_id : test.id,
                                                    tasks: list,
                                                    title: `Feladatsor ${test.id}.` }
                                        }}
                                    >Feladatsor {test.id}.</Link>
                                </p>
                            </>      
                        ))
                }   
            </div>
               
        </>
    )
}
export default Theme;