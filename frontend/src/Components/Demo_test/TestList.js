import React, { useState, useContext } from "react";
import { TestContext } from "./TestContext";
import Simple_Test from "./Simple_Test";
import Glazed_Test from "./Glazed_Test";
import { Button } from "react-bootstrap";
import "../Demo_lesson/lessons.css";

const TestList = () => {
  const [tests, setTests] = useContext(TestContext);
  const [index, setIndex] = useState(0);
  const current = tests[index];
  const comp_category = current.text_category;
  const componentOf = {
    simple: Simple_Test,
    glazed: Glazed_Test,
  };
  const len = tests.length;

  const Header = componentOf[comp_category.toLowerCase()];

  return (
    <div className="lesson-container">
      {
        <Header
          id={current.id}
          category={current.category}
          text_category={current.text_category}
          text_of_the_question={current.text_of_the_question}
          answers={current.answers}
          points={current.points}
        />
      }
      <Button
        className="btn"
        onClick={index >= 1 ? () => setIndex(index - 1) : () => setIndex(index)}
      >
        Előző
      </Button>
      <Button
        type="button"
        className="btn"
        value="click"
        onClick={
          index + 1 < len ? () => setIndex(index + 1) : () => setIndex(index)
        }
        style={{ float: "right" }}
      >
        Tovább
      </Button>
    </div>
  );
};
export default TestList;
