import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"
import { TaskContext } from "../tasks/TaskContext";
import TaskList from "../tasks/TaskList"

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
            console.log(jsonData)
            setTasks(jsonData);
        } catch (error) {
            console.error(error.message)
        }
    }

      useEffect(() => {
        getTasks();
        console.log(tasks)
      }, []);


    function sortTestsByID(test_id) {
        tasks.map(task => {
          task.test_id === test_id && task.category === props.location.state.category ?
          list.push(task) : setOtherTasks(task)

          console.log("Kapott: ", test_id)
          console.log("Task :", task.test_id)

          console.log("Kapott: ", props.location.state.category)
          console.log("Task :", task.category)
        })
        console.log(list)
    }

    return (
        <>
            <div className="title-container">
                <h1>{props.location.state.category}</h1>
            </div>
            <p>{props.location.state.text_of_lesson}</p>
            <h2>Tesztfeladatok</h2>
            {testID.map(test => (
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
            ))}
        </>
    )
}
export default Theme;