import React, { useState, useContext } from "react";
import { LessonContext } from "./LessonContext";
import Lesson from "./Lesson";
import LessonNav from "./LessonNav";
import { Button } from "react-bootstrap";
import "./lessons.css";

const LessonList = () => {
  const [lessons, setLessons] = useContext(LessonContext);
  const [index, setIndex] = useState(0);
  const current = lessons[index];
  const len = lessons.length;

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="lesson-container">
      {
        <Lesson
          category={current.category}
          text_of_the_lesson={current.text_of_the_lesson}
          level={current.level}
          sentences={current.sentences}
        />
      }
      <LessonNav />
      <Button
        className="btn"
        disabled={index >= 1 ? false : true}
        onClick={index >= 1 ? () => setIndex(index - 1) : () => setIndex(index)}
      >
        Előző
      </Button>
      <Button
        type="button"
        className="btn"
        value="click"
        disabled={index + 1 < len ? false : true}
        onClick={
          index + 1 < len ? () => setIndex(index + 1) : () => setIndex(index)
        }
        style={{ float: "right" }}
      >
        Következő
      </Button>
    </div>
  );
};
export default LessonList;
