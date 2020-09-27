import React from "react";
import { Button, Alert } from "react-bootstrap";
import "../Demo_lesson/lessons.css";
import Dialog from "./Dialog";
import "./tests.css";
import Card from "./Card";

const Paired_Test = ({
  category,
  text_of_the_question,
  text_category,
  answers,
  points,
}) => {
  return (
    <div>
      <div className="title-container">{category}</div>
      <p>{text_of_the_question}</p>
      <div className="question-container">
        <div className="left-side">
          {answers.map((answer) => (
            <Button className="outline-button">{answer.question_text}</Button>
          ))}
        </div>
        <div className="right-side">
          {answers.map((answer) => (
            <Button className="outline-button">{answer.answer_text}</Button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Paired_Test;
