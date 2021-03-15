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
    const [tasks, setTasks] = useState([
        {
            id: 1,
            category: "Az állítmány",
            test_id: 2,
            text_category: "simple",
            text_of_the_question:
              "A lusta Mirci a verandán aludt. Mi a mondat állítmánya?",
            answers: [
              {
                answer_id: 1,
                answer_text: "Mirci",
                correct: false,
              },
              {
                answer_id: 2,
                answer_text: "verandán",
                correct: false,
              },
              {
                answer_id: 3,
                answer_text: "aludt",
                correct: true,
              },
              {
                answer_id: 4,
                answer_text: "lusta",
                correct: false,
              },
            ],
            points: 10,
          },
          {
            id: 2,
            category: "Az állítmány",
            test_id: 1,
            text_category: "simple",
            text_of_the_question:
              "Mi az állítmány fajtája? A nyúl nehezen fogható meg.",
            answers: [
              {
                answer_id: 1,
                answer_text: "névszói",
                correct: false,
              },
              {
                answer_id: 2,
                answer_text: "nincs állítmány",
                correct: false,
              },
              {
                answer_id: 3,
                answer_text: "igei",
                correct: true,
              },
              {
                answer_id: 4,
                answer_text: "névszói-igei",
                correct: false,
              },
            ],
            points: 10,
          },
          {
            id: 3,
            category: "Az állítmány",
            test_id: 1,
            text_category: "glazed",
            text_of_the_question:
              "A lusta Mirci a verandán aludt. Húzd a helyére a mondatrészeket.",
            answers: [
              {
                answer_id: 5,
                question_text: "Mit állítok?",
                answer_text: "aludt",
              },
              {
                answer_id: 6,
                question_text: "Ki aludt?",
                answer_text: "Mirci",
              },
              {
                answer_id: 7,
                question_text: "Hol aludt?",
                answer_text: "verandán",
              },
              {
                answer_id: 8,
                question_text: "Milyen Mirci?",
                answer_text: "lusta",
              },
            ],
            points: 40,
          },
          {
            id: 4,
            category: "Az állítmány",
            test_id: 2,
            text_category: "pairing",
            text_of_the_question: "Találd meg a párokat.",
            answers: [
              {
                answer_id: 5,
                question_text: "állítmány",
                answer_text: "aludt",
              },
              {
                answer_id: 6,
                question_text: "alany",
                answer_text: "Mirci",
              },
              {
                answer_id: 7,
                question_text: "helyhatározó",
                answer_text: "verandán",
              },
              {
                answer_id: 8,
                question_text: "jelző",
                answer_text: "lusta",
              },
            ],
            points: 10,
          },
          {
            id: 5,
            category: "Az alany",
            test_id: 1,
            text_category: "dropdownlist",
            text_of_the_question: "Határozd meg a megadott mondatok alanyának fajtáját és válaszd ki a megfelelőt a legördülő listából.",
            answers: [
              {
                answer_id: 9,
                question_text: "A történelem órák izgalmasak.",
                answer_text: "határozott",
              },
              {
                answer_id: 10,
                question_text: "Az ember gyakran téved.",
                answer_text: "általános",
              },
              {
                answer_id: 11,
                question_text: "Terítve van.",
                answer_text: "tapadásos-lappangó",
              },
              {
                answer_id: 12,
                question_text: "Esteledik.",
                answer_text: "alanytalan mondat",
              },
              {
                answer_id: 13,
                question_text: "Csöngettek.",
                answer_text: "határozatlan",
              }
            ],
            array: ["határozott", "határozatlan", "általános", "tapadásos-lappangó", "alanytalan mondat"],
            points: 10,
          },
          {
            id: 6,
            category: "Az alany",
            test_id: 2,
            text_category: "textinput",
            text_of_the_question: "Határozd meg a megadott mondatok alanyának fajtáját és írd be a megoldásod a megfelelő helyre.",
            answers: [
              {
                answer_id: 9,
                question_text: "A történelem órák izgalmasak.",
                answer_text: "határozott",
              },
              {
                answer_id: 10,
                question_text: "Az ember gyakran téved.",
                answer_text: "általános",
              },
              {
                answer_id: 11,
                question_text: "Terítve van.",
                answer_text: "tapadásos-lappangó",
              },
              {
                answer_id: 12,
                question_text: "Esteledik.",
                answer_text: "alanytalan mondat",
              },
              {
                answer_id: 13,
                question_text: "Csöngettek.",
                answer_text: "határozatlan",
              }
            ],
            array: ["határozott", "határozatlan", "általános", "tapadásos-lappangó", "alanytalan mondat"],
            points: 10,
          }
    ]);
    const [alttasks, setAlttasks] = useState([]);
    const [otherTasks, setOtherTasks] = useState([]);
    let list = [];
    console.log(props.location.state.category)

    function sortTestsByID(test_id) {
        {tasks.map(task => {
          task.test_id === test_id && task.category === props.location.state.category ?
          list.push(task) : setOtherTasks(task)
        })}
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