import React, { useState, useEffect } from "react";
import { ButtonToolbar } from "react-bootstrap";
import "../../../styles/Layout.css"
import "../../../styles/Tasks.css"

import AddModal from "./AddModal"

const Simple_Task = ({
    id,
    category,
    test_id,
    text_of_the_question,
    text_category,
    answers,
    points,
    title
  }) => {

    const [modalTitle, setModalTitle] = useState(null);
    const [modalHeader, setModalHeader] = useState(null);
    const [modalText, setModalText] = useState(null);
    const [modalShow, setModalShow] = React.useState(false);

    const updateUserPoints = async( user_id, points) => {
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

    const addModalClose = () => setModalShow(false);

    const correctAnswer = (value, text) => {
        if (value == true) {
          setModalTitle("Sikerült.");
          setModalHeader("Gratulálunk! A válaszod helyes. " + points + " pontban részesülsz.");
          setModalText("A helyes válasz: " + text);
          var count = parseInt(localStorage.points) + points;
          localStorage.setItem("points", count);
          updateUserPoints(localStorage.user_id, count);
          setModalShow(true);
        } else {
          setModalTitle("Rossz válasz.");
          setModalHeader("Ez most nem sikerült.");
          setModalText("A válaszod helytelen.");
          setModalShow(true);
        }
      };

      function shuffleArray(array) {
        for (var i = 0; i < array.length - 1; i++) {
          var j = i + Math.floor(Math.random() * (array.length - i));
          var temp = array[j];
          array[j] = array[i];
          array[i] = temp;
      }
      return array;
    }

    useEffect(() => {
      shuffleArray(answers);
    }, []);
      
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
            <p className="text">{text_of_the_question}</p>
            <div className="question" style={{marginLeft: "0"}}>
                {answers.map((answer) => (
                <button className="answerButton"
                    onClick={() => correctAnswer(answer.correct, answer.answer_text)}
                    data-toggle="modal" data-target="exampleModal"
                >
                    {answer.answer_text}
                </button>
                ))}
                <ButtonToolbar>
                <AddModal
                  show={modalShow}
                  onHide={addModalClose}
                  modalTitle={modalTitle}
                  modalHeader={modalHeader}
                  modalText={modalText}
                />
              </ButtonToolbar>
            </div>            
        </>
    )
  }
  export default Simple_Task;