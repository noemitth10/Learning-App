import React from "react";

function Board(props) {
  const good_answer = props.answer;

  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    console.log(card_id);
    console.log(good_answer);

    const card = document.getElementById(card_id);
    if (card_id == good_answer) {
      console.log("good answer");

      card.style.display = "block";

      e.target.appendChild(card);
    } else {
      console.log("bad answer");
      card.style.display = "block";
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      answer={props.answer}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}
export default Board;
