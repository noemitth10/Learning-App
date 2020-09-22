import React, { useContext } from "react";
import { LessonContext } from "./LessonContext";

const LessonNav = () => {
  const [lessons, setLessons] = useContext(LessonContext);

  return (
    <div>
      <p>List of Lessons: {lessons.length}</p>
    </div>
  );
};
export default LessonNav;
