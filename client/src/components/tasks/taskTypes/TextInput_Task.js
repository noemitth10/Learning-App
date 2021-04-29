import React, { useState, useContext } from "react";
import { Button, Alert, ButtonToolbar } from "react-bootstrap";
import AddModal from "./AddModal"
import "../../../styles/Layout.css"
import "../../../styles/Tasks.css"

const TextInput_Task = ({
    id,
    category,
    test_id,
    text_of_the_question,
    text_category,
    answers,
    points,
    title,
    array
  }) => {

    if(array == undefined) {
      array = [];
      
      for (const answer of answers) {
          array.push(answer.question_text)
      }
    }

    let oldArray = array;
    const [modalShow, setModalShow] = React.useState(false);
    const addModalClose = () => setModalShow(false);
    const length = answers.length;
    let solutions = 0;
    const newArray = shuffleArray(oldArray);

    const updateUserPoints = async(user_id, points) => {
      try {
          const body = { points }
          const response = await fetch(`http://localhost:5000/user/${user_id}`, {
              method: "PUT",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(body)
        })

      } catch (error) {
          console.error(error.message)
      }
    }

    function shuffleArray(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
    }


    const correctAnswer = (value, answer, id) => {
        value = value.toLowerCase();
        value = value.replace(/[0-9]/g, '');
        value = value.replace(/[&\/\\#,+()$~%'":*?<>{}|]/g, '');
        value = value.trim();
        if (value == answer) {
          document.getElementById(id).disabled = true;
          document.getElementById(id).value = answer;
          document.getElementById(id).style.outline = "#4CAF50 solid 3px";
          solutions = solutions + 1;
        } else {
          document.getElementById(id).style.outline = "#eb4034 solid 3px";
        }

        if(solutions == length) {
            var count = parseInt(localStorage.points) + points;
            localStorage.setItem("points", count);
            updateUserPoints(localStorage.user_id, count);
            setModalShow(true);
        }
      };

      const onKeyDown = (event) => {
        if (event.keyCode === 13) {
          event.preventDefault()
      }}
      
    return (
        <>
            <div className="title-container">
              <div className="left">
                  <h1>{title}</h1>
              </div>
              <div className="right">
                <p className="points">Pontjaim: {localStorage.points}</p>
              </div>
            </div>
            <div className="dropdown-container">
                    <p>{text_of_the_question}</p>
                    {
                    answers.map((answer) => (
                        <>
                          <div className="question-line">
                            {answer.question_text}
                          </div>
                          <div className="answer-line">
                            <form>
                            <input className="dropdown-input" type="text" id={answer.answer_id} name={answer.answer_id}
                            onKeyDown={event => onKeyDown(event)}
                            onChange={e => correctAnswer(e.target.value, answer.answer_text, answer.answer_id)}/>
                            </form>
                          </div>
                        </>
                    ))}
                    <ButtonToolbar>
                        <AddModal
                        show={modalShow}
                        onHide={addModalClose}
                        modalTitle={"Jó válasz."}
                        modalHeader={"Gratulálunk! Minden válaszod helyes." + points + " pontban részesülsz."}
                        />
                    </ButtonToolbar>
            </div>        
        </>
    )
  }
  export default TextInput_Task;