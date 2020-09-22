import React, { useState, createContext } from "react";

export const TestContext = createContext();

export const TestProvider = (props) => {
  const [tests, setTests] = useState([
    {
      id: 1,
      category: "Az állítmány - Tesztfeladatok",
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
      category: "Az állítmány - Tesztfeladatok",
      text_category: "glazed",
      text_of_the_question:
        "A lusta Mirci a verandán aludt. Húzd a helyére a mondatrészeket.",
      answers: [
        {
          answer_id: 1,
          question_text: "Mit állítok?",
          answer_text: "aludt",
        },
        {
          answer_id: 2,
          question_text: "Ki aludt?",
          answer_text: "Mirci",
        },
        {
          answer_id: 3,
          question_text: "Hol aludt?",
          answer_text: "verandán",
        },
        {
          answer_id: 4,
          question_text: "Milyen Mirci?",
          answer_text: "lusta",
        },
      ],
      points: 10,
    },
  ]);

  return (
    <TestContext.Provider value={[tests, setTests]}>
      {props.children}
    </TestContext.Provider>
  );
};
