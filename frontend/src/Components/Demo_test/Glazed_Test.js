import React from "react";
import { Button, Alert } from "react-bootstrap";
import "../Demo_lesson/lessons.css";
import Dialog from "./Dialog";
import Board from "./Board";
import Card from "./Card";

import "./tests.css";

const Glazed_Test = ({ category, text_of_the_question, answers, points }) => {
  return (
    <div>
      <div className="title-container">{category}</div>
      <p>{text_of_the_question}</p>
      <div className="question-container">
        <Board id="board-1" className="board">
          {answers.map((answer) => (
            <Card id={answer.answer_id} className="card" draggable="true">
              {answer.question_text}
            </Card>
          ))}
        </Board>
        <Board id="board-2" className="board">
          {answers.map((answer) => (
            <Card id={answer.answer_id} className="card" draggable="true">
              {answer.answer_text}
            </Card>
          ))}
        </Board>
      </div>
    </div>
  );
};
export default Glazed_Test;
