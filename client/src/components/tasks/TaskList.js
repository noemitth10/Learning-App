import { useState, useContext, useEffect } from "react";
import { TaskContext } from "./TaskContext";

import "../../styles/Tasks.css"

import Simple_Task from "./taskTypes/Simple_Task";
import Glazed_Task from "./taskTypes/Glazed_Task";
import Pairing_Task from "./taskTypes/Pairing_Task";
import DropDownList_Task from "./taskTypes/DropDownList_Task";
import TextInput_Task from "./taskTypes/TextInput_Task";

const TaskList = (props, {setAuth}) => {
    const [tasks, setTasks] = useState(props.location.state.tasks);
    const [index, setIndex] = useState(0);
    const current = tasks[index];
    console.log(tasks)
    const comp_category = current.task_type;
    const componentOf = {
      simple: Simple_Task,
      glazed: Glazed_Task,
      pairing: Pairing_Task,
      dropdownlist: DropDownList_Task,
      textinput: TextInput_Task

    };
    const len = tasks.length;

    const Header = componentOf[comp_category.toLowerCase()];

    return (
        <>
            {
              <Header
                id={current.id}
                category={current.category}
                task_id={current.task_id}
                test_id={current.test_id}
                text_category={current.task_type}
                text_of_the_question={current.text_of_the_question}
                answers={current.answers}
                points={current.points}
                title={props.location.state.title}
                array={current.choice_array}
              />
            }
    <p className="test-length">Tesztfeladatok: {index + 1}/{len}</p>
    <button className="pacingButton"
        disabled={index >= 1 ? false : true}
        onClick={index >= 1 ? () => setIndex(index - 1) : () => setIndex(index)}
      >
        Előző
      </button>
      <button className="pacingButton"
        value="click"
        disabled={index + 1 < len ? false : true}
        onClick={
          index + 1 < len ? () => setIndex(index + 1) : () => setIndex(index)
        }
        style={{ float: "right" }}
      >
        Következő
      </button>
        </>
    )
}
export default TaskList;