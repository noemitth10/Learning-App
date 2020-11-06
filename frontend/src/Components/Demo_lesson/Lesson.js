import React from "react";
import "./lessons.css";

const Lesson = ({ category, text_of_the_lesson, level, sentences }) => {
  return (
    <div>
      <div className="title-container">{category}</div>
      <div className="lesson-content">
          {text_of_the_lesson.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
          {sentences.map((sentence) => (
            <p style={{textAlign: "center"}}>{sentence.sentence_text}</p>
          ))}
      </div>  
    </div>
  );
};
export default Lesson;