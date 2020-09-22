import React from "react";
import { Button, Alert } from "react-bootstrap";
import "../Demo_lesson/lessons.css";
import Dialog from "./Dialog";
import Board from "./Board";
import Card from "./Card";

import "./tests.css";

const Glazed_Test = ({
  id,
  category,
  text_of_the_question,
  answers,
  points,
}) => {
  return (
    <div>
      <div className="title-container">{category}</div>
      <p>{text_of_the_question}</p>
      <div>
        {answers.map((answer) => (
          <div style={{ display: "flex", margin: "4%" }}>
            <h4 style={{ width: "25%" }}>{answer.question_text}</h4>
            <Board
              id={id}
              className="l_board"
              answer={answer.answer_id}
            ></Board>
          </div>
        ))}
      </div>

      <div className="question-container">
        <Board id="board-1" className="board">
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
