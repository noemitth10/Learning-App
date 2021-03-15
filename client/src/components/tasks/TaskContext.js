import React, { useState, createContext } from "react";

export const TaskContext = createContext();

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            category: "Tesztfeladatok",
            test_id: 2,
            text_category: "simple",
            text_of_the_question:
              "A lusta Mirci a verandán aludt. Mi a mondat állítmánya?",
            answers: [
              {
                answer_id: 1,
                answer_text: "Mirci",
                correct: false,
              },
              {
                answer_id: 2,
                answer_text: "verandán",
                correct: false,
              },
              {
                answer_id: 3,
                answer_text: "aludt",
                correct: true,
              },
              {
                answer_id: 4,
                answer_text: "lusta",
                correct: false,
              },
            ],
            points: 10,
          },
          {
            id: 2,
            category: "Tesztfeladatok",
            test_id: 1,
            text_category: "simple",
            text_of_the_question:
              "Mi az állítmány fajtája? A nyúl nehezen fogható meg.",
            answers: [
              {
                answer_id: 1,
                answer_text: "névszói",
                correct: false,
              },
              {
                answer_id: 2,
                answer_text: "nincs állítmány",
                correct: false,
              },
              {
                answer_id: 3,
                answer_text: "igei",
                correct: true,
              },
              {
                answer_id: 4,
                answer_text: "névszói-igei",
                correct: false,
              },
            ],
            points: 10,
          },
          {
            id: 3,
            category: "Tesztfeladatok",
            test_id: 1,
            text_category: "glazed",
            text_of_the_question:
              "A lusta Mirci a verandán aludt. Húzd a helyére a mondatrészeket.",
            answers: [
              {
                answer_id: 5,
                question_text: "Mit állítok?",
                answer_text: "aludt",
              },
              {
                answer_id: 6,
                question_text: "Ki aludt?",
                answer_text: "Mirci",
              },
              {
                answer_id: 7,
                question_text: "Hol aludt?",
                answer_text: "verandán",
              },
              {
                answer_id: 8,
                question_text: "Milyen Mirci?",
                answer_text: "lusta",
              },
            ],
            points: 40,
          }
    ]);

    return (
        <TaskContext.Provider value={[tasks, setTasks]}>
          {props.children}
        </TaskContext.Provider>
      );
};
