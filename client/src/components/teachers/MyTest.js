import React, { useEffect, useState, useContext } from "react";

import Simple_Task from "../tasks/taskTypes/Simple_Task";
import Glazed_Task from "../tasks/taskTypes/Glazed_Task";
import Pairing_Task from "../tasks/taskTypes/Pairing_Task";
import DropDownList_Task from "../tasks/taskTypes/DropDownList_Task";
import TextInput_Task from "../tasks/taskTypes/TextInput_Task";

import "../../styles/Tasks.css"

const MyTest = (props) => {
    let task = props.location.state.task;
    let title = props.location.state.title;
    
    const comp_category = task.task_type;
    const componentOf = {
      simple: Simple_Task,
      glazed: Glazed_Task,
      pairing: Pairing_Task,
      dropdownlist: DropDownList_Task,
      textinput: TextInput_Task

    };

    const Header = componentOf[comp_category.toLowerCase()];

    return (
        <>
            <Header
                id={task.task_id}
                category={task.category}
                text_category={task.task_type}
                text_of_the_question={task.text_of_the_question}
                answers={task.answers}
                points={task.points}
                title={title}
                array={task.array}
              />
        </>
    )
}
export default MyTest;