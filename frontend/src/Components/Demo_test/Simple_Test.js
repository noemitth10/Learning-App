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

  const correctAnswer = (value) => {
    if (value == true) {
      console.log("success");
      setModalTitle("Success");
      setModalHeader("Gratulálunk!");
      setModalText("A válaszod helyes.");
      setModalShow(true);
    } else {
      console.log("warning");
      setModalTitle("Wrong answer");
      setModalHeader("Ez most nem sikerült. :((");
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
          <Button
            className="outline-button"
            onClick={() => correctAnswer(answer.correct)}
          >
            {answer.answer_text}
          </Button>
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
