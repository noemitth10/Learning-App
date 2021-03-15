import React, { useState, useContext } from "react";

import Board from "./Board";
import Card from "./Card";

import "../../../styles/Tasks.css"

const Glazed_Task = ({
  id,
  category,
  test_id,
  text_of_the_question,
  answers,
  points,
  title
}) => {
  var array = answers

  function shuffleArray(array) {
    for (var i = 0; i < array.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (array.length - i));
      var temp = array[j];
      array[j] = array[i];
      array[i] = temp;
  }
  return array;
}

  return (
    <div>
       <div className="title-container">
              <div className="left">
                  <h1>{title}</h1>
              </div>
              <div className="right">
                <p className="points">Pontjaim: {localStorage.points}</p>
              </div>
            </div>
        <p className="text">{text_of_the_question}</p>
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
          {shuffleArray(answers.map((answer) => (
            <Card id={answer.answer_id} className="card" draggable="true">
              {answer.answer_text}
            </Card>
          )))}
        </Board>
      </div>
    </div>
  );
};
export default Glazed_Task;
