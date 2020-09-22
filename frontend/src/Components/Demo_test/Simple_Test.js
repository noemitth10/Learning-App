import React from "react";
import { Button, Alert } from "react-bootstrap";
import "../Demo_lesson/lessons.css";
import Dialog from "./Dialog";
import "./tests.css";

const Simple_Test = ({
  category,
  text_of_the_question,
  text_category,
  answers,
  points,
}) => {
  const correctAnswer = (value) => {
    if (value == true) {
      console.log("success");
    } else {
      console.log("warning");
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
      </div>
    </div>
  );
};
export default Simple_Test;
