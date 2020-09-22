import React from "react";
import "./lessons.css";

const Lesson = ({ category, text_of_the_lesson, level, sentences }) => {
  return (
    <div>
      <div className="title-container">{category}</div>
      <p>{text_of_the_lesson}</p>
      {sentences.map((sentence) => (
        <p>{sentence.sentence_text}</p>
      ))}
    </div>
  );
};
export default Lesson;
