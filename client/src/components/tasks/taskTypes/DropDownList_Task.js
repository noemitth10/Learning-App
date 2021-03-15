import React, { useState, useContext } from "react";
import { Button, Alert, ButtonToolbar } from "react-bootstrap";
import AddModal from "./AddModal"
import "../../../styles/Layout.css"
import "../../../styles/Tasks.css"

const DropDownList_Task = ({
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

    function shuffleArray_2(answer_id, answer_text) {
      var newArray = shuffleArray(oldArray)

      return (
        <form>
            <select className="dropdown-input" id={answer_id} name={answer_id} onChange={e => correctAnswer(e.target.value, answer_text, answer_id)}>
                        <option value={newArray[0]}>{newArray[0]}</option>
                        <option value={newArray[1]}>{newArray[1]}</option>
                        <option value={newArray[2]}>{newArray[2]}</option>
                        <option value={newArray[3]}>{newArray[3]}</option>
                        <option value={newArray[4]}>{newArray[4]}</option>
            </select>
        </form>
      )
    }


    const correctAnswer = (value, answer, id) => {
        if (value == answer) {
          console.log("success");
          document.getElementById(id).disabled = true;
          document.getElementById(id).style.outline = "#4CAF50 solid 3px";
          solutions = solutions + 1;
          console.log(solutions)
        } else {
          console.log("warning");
          document.getElementById(id).style.outline = "#eb4034 solid 3px";
        }

        if(solutions == length) {
            var count = parseInt(localStorage.points) + points;
            localStorage.setItem("points", count);
            updateUserPoints(localStorage.user_id, count);
            setModalShow(true);
        }
      };
      
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
                            {shuffleArray_2(answer.answer_id, answer.answer_text)}
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
  export default DropDownList_Task;

  /*
  <form>
                            <select className="form-control" id={answer.answer_id} name={answer.answer_id}>
                                {
                                    subjectiveTypes.map((type) => {
                                        <option value={type.type_name}>{type.type_name}</option>
                                    })
                                }
                            </select>
                            </form>
  */