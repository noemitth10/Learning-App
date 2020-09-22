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
      <Button className="btn" onClick={() => setIndex(index - 1)}>
        Előző
      </Button>
      <Button
        type="button"
        className="btn"
        value="click"
        onClick={() => setIndex(index + 1)}
        style={{ float: "right" }}
      >
        Következő
      </Button>
    </div>
  );
};
export default LessonList;
