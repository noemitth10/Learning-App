import React from "react";

function Board(props) {
  const good_answer = props.answer;
  var all = 0;

  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    console.log(card_id);
    console.log(good_answer);

    const card = document.getElementById(card_id);
    if (card_id == good_answer) {
      console.log("good answer");
      all += 1;
      card.style.display = "block";
      card.draggable = false;

      e.target.appendChild(card);
    } else if (card_id != good_answer) {
      console.log("bad answer");
      card.style.display = "block";
    } else {
      card.style.display = "absolute";
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
