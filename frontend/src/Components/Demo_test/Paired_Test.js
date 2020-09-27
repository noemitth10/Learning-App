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
  var pointed_first_id = 0;
  var pointed_second_id = 0;
  var chosen_points = 0;

  const setId = (id) => {
    if (chosen_points == 0) {
      chosen_points += 1;
      pointed_first_id = id;
      console.log("First id: " + pointed_first_id);
    } else {
      chosen_points += 1;
      pointed_second_id = id;
      console.log("Second id: " + pointed_second_id);
    }

    if (chosen_points == 2) {
      if (pointed_first_id == pointed_second_id) console.log("good answer");
      else console.log("bad answer");
      chosen_points = 0;
    }
  };

  return (
    <div>
      <div className="title-container">{category}</div>
      <p>{text_of_the_question}</p>
      <div className="question-container">
        <div className="left-side">
          {answers.map((answer) => (
            <Button
              className="outline-button"
              onClick={() => setId(answer.answer_id)}
            >
              {answer.question_text}
            </Button>
          ))}
        </div>
        <div className="right-side">
          {answers.map((answer) => (
            <Button
              className="outline-button"
              onClick={() => setId(answer.answer_id)}
            >
              {answer.answer_text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Paired_Test;
