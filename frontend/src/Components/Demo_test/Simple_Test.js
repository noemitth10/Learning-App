import React, { useState, useContext } from "react";
import { Button, Alert, ButtonToolbar } from "react-bootstrap";
import "../Demo_lesson/lessons.css";
import Dialog from "./Dialog";
import AddModal from "./AddModal";
import "./tests.css";

const Simple_Test = ({
  category,
  text_of_the_question,
  text_category,
  answers,
  points,
}) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState(null);
  const [modalHeader, setModalHeader] = React.useState(null);
  const [modalText, setModalText] = React.useState(null);

  const addModalClose = () => setModalShow(false);

  const correctAnswer = (value, text) => {
    if (value == true) {
      console.log("success");
      setModalTitle("Sikerült.");
      setModalHeader("Gratulálunk! A válaszod helyes.");
      setModalText("A helyes válasz: " + text);
      setModalShow(true);
    } else {
      console.log("warning");
      setModalTitle("Rossz válasz.");
      setModalHeader("Ez most nem sikerült.");
      setModalText("A válaszod helytelen.");
      setModalShow(true);
    }
  };

  return (
    <div>
      <div className="title-container">{category}</div>
      <p>{text_of_the_question}</p>
      <div className="question-container">
        {answers.map((answer) => (
          <button
            className="test-btn"
            onClick={() => correctAnswer(answer.correct, answer.answer_text)}
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
    </div>
  );
};
export default Simple_Test;
