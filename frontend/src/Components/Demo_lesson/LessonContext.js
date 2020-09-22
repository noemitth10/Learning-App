import React, { useState, createContext } from "react";

export const LessonContext = createContext();

export const LessonProvider = (props) => {
  const [lessons, setLessons] = useState([
    {
      id: 1,
      category: "Az állítmány",
      text_of_the_lesson:
        "Az állítmány a tagolt mondat központi szerepű mondatrésze. Az alany az a mondatrész, amely megnevezi azt a dolgot, személyt, amelyre az állítmány megállapítása vonatkozik.# A mondat állítását tartalmazza, a Mit állítok? kérdésre válaszol.# Igei természetű mondatrész, de ez nem azt jelenti hogy csak ige lehet, hanem azt, hogy ki kell fejeznie a benne megfogalmazott állítás idejét, az alany személyét és számát, és a beszélőnek az igemódokban kifejezett viszonyulását az eseményekhez.#",
      level: "Beginner",
      sentences: [],
    },
    {
      id: 2,
      category: "Az állítmány",
      text_of_the_lesson:
        "Az állítmány fajtái:# Igei: A igei állítmány cselekvést, történést, létezést, állapotot fejez ki, és önmagában is ki tudja fejezni az időt, a módot, a számot és a személyt.#",
      level: "Beginner",
      sentences: [
        {
          sentence_id: 1,
          sentence_text: "A lány futott.",
          allitmany: "futott",
        },
      ],
    },
    {
      id: 3,
      category: "Az állítmány",
      text_of_the_lesson:
        "Névszói-igei:#Az állítmánynak mindig meg kell jelölnie az időt, a módot, a számot és a személyt még akkor is ha ige. Mivel a névszó nem tudja kifejezni ezeket, ezért ki kell egészülnie segédigével.#",
      level: "Beginner",
      sentences: [
        {
          sentence_id: 1,
          sentence_text: "A lány magas volt.",
          allitmany: "volt",
        },
        {
          sentence_id: 2,
          sentence_text: "A lány fut .",
          allitmany: "fut",
        },
      ],
    },
    {
      id: 4,
      category: "Az állítmány",
      text_of_the_lesson:
        "Névszói (főnév, melléknév, számnév vagy főnévi, melléknévi, számnévi névmás):#A névszói állítmány alaktani szempontból kötött, ezért csak olyan mondatokban szerepel, melyekben az állítmány kijelentő módú, jelen idejű értelemben vonatkoztat valamit a 3. személyű alanyra. A névszói állítmány az alanyt minősíti.#",
      level: "Beginner",
      sentences: [
        {
          sentence_id: 1,
          sentence_text: "A lányok okosak.",
          allitmany: "okosak",
        },
        {
          sentence_id: 2,
          sentence_text: "A delfin emlős.",
          allitmany: "emlős",
        },
        {
          sentence_id: 3,
          sentence_text: "Viktor a barátom.",
          allitmany: "barátom",
        },
      ],
    },
  ]);

  return (
    <LessonContext.Provider value={[lessons, setLessons]}>
      {props.children}
    </LessonContext.Provider>
  );
};
