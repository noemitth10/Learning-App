import React, { useState } from "react";
import { Button, Alert, ButtonToolbar } from "react-bootstrap";
import "../../../styles/Layout.css"
import "../../../styles/Tasks.css"
import AddModal from "./AddModal"

const Pairing_Task = ({
  category,
  text_of_the_question,
  test_id,
  text_category,
  answers,
  points,
  title
}) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalHeader, setModalHeader] = useState(null);
  const [modalText, setModalText] = useState(null);
  const addModalClose = () => setModalShow(false);
  const [prevPoints, setPrevPoints] = useState(localStorage.points);
  
  var pointed_first_id = 0;
  var pointed_second_id = 0;
  var chosen_points = 0;
  var firstid;
  var secondid;
  var len = answers.length;
  console.log("DB: ", len)

  const setId = (buttonid, id) => {
    console.log("Clicked button id: ", buttonid)

    if (chosen_points == 0) {
      firstid = buttonid;
      chosen_points += 1;
      pointed_first_id = id;
      console.log("First id: " + pointed_first_id);
      document.getElementById(buttonid).style.outline = "#dbeb34 solid 3px";
    } else {
      secondid = buttonid;
      chosen_points += 1;
      pointed_second_id = id;
      console.log("Second id: " + pointed_second_id);
      document.getElementById(buttonid).style.outline = "#dbeb34 solid 3px";
    }

    if (chosen_points == 2) {
      if (pointed_first_id == pointed_second_id && firstid !== secondid) {
        document.getElementById("btn-left-" + id).style.outline = "#4CAF50 solid 3px";
        document.getElementById("btn-right-" + id).style.outline = "#4CAF50 solid 3px";
        document.getElementById("btn-left-" + id).disabled = true;
        document.getElementById("btn-right-" + id).disabled = true;
        console.log("good answer");
        len = len - 1;
        console.log("DB: ", len)

        if(len === 0) {
          localStorage.setItem("points", parseInt(prevPoints) + parseInt(40));
          updateUserPoints(localStorage.user_id, parseInt(localStorage.points));
          setModalTitle("Sikerült.");
          setModalHeader("Gratulálunk! Minden válaszod helyes. 40 pontban részesülsz.");
          setModalText("");
          setModalShow(true);
          setPrevPoints(parseInt(prevPoints) + parseInt(40));
        }
      }
      else {
        document.getElementById(firstid).style.outline = "#eb4034 solid 3px";
        document.getElementById(secondid).style.outline = "#eb4034 solid 3px";
        console.log(firstid)
        console.log(secondid)

        setTimeout(() => {
          document.getElementById(firstid).style.outline = "none";
          document.getElementById(secondid).style.outline = "none"; 
        }, 1000);
        console.log("bad answer");
      }
      chosen_points = 0;
    }
  };

  const updateUserPoints = async( user_id, points) => {
    try {
        const body = { points }
        const response = await fetch(`http://localhost:5000/user/${user_id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })    

    } catch (error) {
        console.error(error.message)
    }
}

  function shuffleArray(array) {
    for (var i = 0; i < array.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (array.length - i));
      var temp = array[j];
      array[j] = array[i];
      array[i] = temp;
  }
  return array;
}

  return (
    <div>
      <div className="title-container">
        <div className="left">
            <h1>{title}</h1>
        </div>
        <div className="right">
          <p className="points">Pontjaim: {localStorage.points}</p>
        </div>
      </div>
      <p>{text_of_the_question}</p>
      <div>
          <div className="left-side">
            {shuffleArray(answers.map((answer) => (
              <button
                id={"btn-left-" + answer.answer_id}
                className="pairing-btn paired"
                onClick={(e) => setId(e.target.id, answer.answer_id)}
              >
                {answer.question_text}
              </button>
            )))}
          </div>

          <div className="right-side">
            {shuffleArray(answers.map((answer) => (
              <button
                id={"btn-right-" + answer.answer_id}
                className="pairing-btn paired"
                onClick={(e) => setId(e.target.id, answer.answer_id)}
              >
                {answer.answer_text}
              </button>
            )))}
          </div>
      </div>
              <ButtonToolbar>
                <AddModal
                  show={modalShow}
                  onHide={addModalClose}
                  modalTitle={modalTitle}
                  modalHeader={modalHeader}
                  modalText={modalText}
                />
              </ButtonToolbar>
      <div>
      </div>
    </div>
  );
};
export default Pairing_Task;
