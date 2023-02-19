import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import AddModal from "../tasks/taskTypes/AddModal"

import "./teachers.css"

const MyTestList = () => {
    let owner_id = localStorage.user_id;
    const [myTests, setMyTests] = useState([]);
    const [modalTitle, setModalTitle] = useState(null);
    const [modalHeader, setModalHeader] = useState(null);
    const [modalShow, setModalShow] = React.useState(false);

    const addModalClose = () => setModalShow(false);

    var elements = [];

    useEffect(() => {
        getMyTests();
    }, []);

    const getMyTests = async () => {
        try {

            const response = await fetch(`http://localhost:5000/tasks_by_spec_teacher/${owner_id}`);

            const jsonData = await response.json()
            setMyTests(jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    const deleteMyTest = async test_id => {
        try {
            const response = await fetch(`http://localhost:5000/delete_tasks_by_spec_teacher/${test_id}`, {
                    method: "DELETE",
                    'Content-Type': 'application/json'
            });

            setModalTitle("Sikeres törlés.");
            setModalHeader("Az Ön feladatát töröltük.");
            setModalShow(true);
            if(modalShow == false) {
                setTimeout(function(){ window.location.reload(); }, 3000);
            }
        } catch (error) {
            console.error(error.message)
        }
    }

    const renderTests = () => {
        for (const test of myTests) {
            let tasks = test.tasks[0];

            let task = {
                task_id : "",
                test_id : "",
                category: "",
                task_type: "",
                text_of_the_question: "",
                answers: [],
                points: ""
            };

            if(test.tasks[0]) {
                task.task_id = test.tasks[0].task_id;
                task.test_id = test.tasks[0].test_id;
                task.category = test.tasks[0].category;
                task.task_type = test.tasks[0].task_type;
                task.text_of_the_question = test.tasks[0].text_of_the_question;
                task.answers = test.tasks[0].answers;
                task.points = test.tasks[0].points;
            }

            let task_id = task.task_id;

            if(test.tasks[0]) {
                 elements.push(
                    <div className="mytest-blockdiv">
                        <Link
                            to={{
                                pathname: `/my-test-${task_id}`,
                                state: {    task : task,
                                            title: test.title}
                            }}
                        >Feladatsor {task_id}.</Link>
                        <p>Létrehozás dátuma: 2021.03.04.</p>
                        <button type="button" class="btn btn-danger" onClick={() => deleteMyTest(task.test_id)}>Törlés</button>
                    </div>
                )
            }
        }

        return elements;
    }

    return (
        <>
            <div className="mytest-contentdiv">
                {
                    renderTests()
                }
                <AddModal
                show={modalShow}
                onHide={addModalClose}
                modalTitle={modalTitle}
                modalHeader={modalHeader}
                />
            </div>
            
        </>
    )
}
export default MyTestList;