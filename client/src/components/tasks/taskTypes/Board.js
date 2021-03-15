import React, { useState, useEffect } from "react";
import AddModal from "./AddModal"
import { Button, Alert, ButtonToolbar } from "react-bootstrap";

function Board(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalHeader, setModalHeader] = useState(null);
  const [modalText, setModalText] = useState(null);
  const [prevPoints, setPrevPoints] = useState(localStorage.points);
  console.log("eddigi pontok: ", prevPoints)
  localStorage.setItem("newpoints", 0)

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

    const addModalClose = () => setModalShow(false);

    const good_answer = props.answer;
    
    const drop = (e) => {
      e.preventDefault();
      const card_id = e.dataTransfer.getData("card_id");
      console.log(card_id);
      console.log(good_answer);
  
      const card = document.getElementById(card_id);
      if (card_id == good_answer) {
        console.log("good answer");
        localStorage.setItem("newpoints",  parseInt(localStorage.newpoints) + 10)
        card.style.display = "block";
        card.draggable = false;
  
        e.target.appendChild(card);
      } else if (card_id != good_answer) {
        console.log("bad answer");
        card.style.display = "block";
      } else {
        card.style.display = "absolute";
      }

      if(parseInt(localStorage.newpoints) == 40) {
        localStorage.setItem("points", parseInt(prevPoints) + parseInt(localStorage.newpoints));
        updateUserPoints(localStorage.user_id, parseInt(localStorage.points));
        setModalTitle("Sikerült.");
        setModalHeader("Gratulálunk! A válaszod helyes. 40 pontban részesülsz.");
        localStorage.setItem("newpoints", 0);
        setModalShow(true);
      }
    };
  
    const dragOver = (e) => {
      e.preventDefault();
    };
  
    return (
      <>
      <div
        id={props.id}
        className={props.className}
        answer={props.answer}
        onDrop={drop}
        onDragOver={dragOver}
      >
        {props.children}
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
      </>
      
    );
  }
  export default Board;
  