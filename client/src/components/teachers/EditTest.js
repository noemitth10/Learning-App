import React, { useState } from "react"
import { ButtonToolbar } from "react-bootstrap";
import AddModal from "../tasks/taskTypes/AddModal"

import "./teachers.css"

const EditTest = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const addModalClose = () => setModalShow(false);
    let answer_id = 0;
    const [answerArray, setAnswerArray] = [];
    let answerLength = 0;

    const [input, setInput] = useState({
        title: "Cím",
        test_type: "simple",
        owner_id: localStorage.user_id,
        class_id: undefined,
        is_public: true,
        category: "Kategória",
        text_of_the_question: "A feladat szövege.",
        answers: [],    
        points: 0,        
        options: 0 
    });

    let answer_ = {
        answer_id: undefined,
        question_text: null,
        answer_text: null,
        correct: false
    }

    const [answersList, setAnswers] = useState([]);

    console.log(answersList)
    const { title, test_type, owner_id, class_id, is_public, category,
            text_of_the_question, answers, points, options } = input;
    const { question_text, answer_text, correct} = answer_;

    const onChange = (e) => {
        setInput({...input, [e.target.name]
        : e.target.name === "is_public" ? !e.target.checked : e.target.value});

        if(e.target.name == "options") answerLength = e.target.value;
    }

    const onChangeAnswer = (e) => {
        let meglevo = false;
        let cel = e.target.name;
        let ertek = e.target.value;

        console.log(ertek)
        const newAnswer = {
            answer_id: e.target.id,
            question_text: undefined,
            answer_text: undefined,
            correct: undefined
        }

        for (let i = 0; i < answersList.length; i++) {
            if(answersList[i].answer_id == e.target.id) {
                console.log("Meglévő felülírása")
                if (cel == "answer_text") answersList[i].answer_text = ertek;
                else if(cel == "question_text") answersList[i].question_text = ertek;
                else if(cel == "correct") answersList[i].correct = e.target.checked;
                meglevo = true;
                console.log(answersList[i].correct)
            }
        }

        if(!meglevo) {
            console.log("Új hozzáadása")
            if (cel == "answer_text") newAnswer.answer_text = ertek;
            else if(cel == "question_text") newAnswer.question_text = ertek;
            else if(cel == "correct") newAnswer.correct = e.target.checked;
            setAnswers(oldArray => [...oldArray, newAnswer]);
            console.log(newAnswer.correct)
        }
        console.log(answersList)
    }

    const deletefromAnswers = (id) => {
        const newList = [];
        
        for (const answer of answersList) {
            if(answer.answer_id != id)
                newList.push(answer);
        }

        document.getElementById("div-" + id).style.visibility = "hidden";
        document.getElementById("div-" + id).style.height = 0;
        answerLength--;
        
        setAnswers(newList);
        console.log(answersList)
    }


    const CheckTaskType = ((task_type, options) => {
        var elements_simple = [];
        var elements_default = [];

        for(var i =0; i < options; i++){
            answer_id += 1;
            switch(task_type) {
                case 'simple':
                    elements_simple.push(
                        <div id={"div-" + answer_id}>
                        <h5>Opció {answer_id}</h5>
                        <div className="test-padding-container" style={{display : "block"}}>
                            <p>Válasz: </p>
                            <input type="text" id={answer_id} name="answer_text" placeholder={answer_text} className="form-control my-3" value={answer_text} onChange={e => onChangeAnswer(e)}/>
                            <label>Ez a helyes válasz?</label>
                            <input type="checkbox" id={answer_id} name="correct" onChange={e => onChangeAnswer(e)}></input><br/>
                            <button id={answer_id} type="button" className="btn btn-danger" onClick={(e) => deletefromAnswers(e.target.id)}>Törlés</button>
                        </div>
                        </div>
                    );
                default:
                    elements_default.push(
                        <div id={"div-" + answer_id}>
                        <h5>Opció {answer_id}</h5>
                        <div className="test-padding-container">
                                <p>Kérdés: </p>
                                <input type="text" id={answer_id} name="answer_text" placeholder={answer_text} className="form-control my-3" value={answer_text} onChange={e => onChangeAnswer(e, input.id)}/>
                                
                                <p>Válasz: </p>
                                <input type="text" id={answer_id} name="question_text" placeholder={question_text} className="form-control my-3" value={question_text} onChange={e => onChangeAnswer(e, input.id)}/><br/>
                                <button type="button" className="btn btn-danger">Törlés</button>
                        </div>
                        </div>
                    );
            }
        }

        if(task_type == "simple") return elements_simple;
        else return elements_default;
    });

    async function onSubmitForm(e) {
        e.preventDefault();

        try {
            const body = { title, test_type, owner_id, class_id, is_public, category, text_of_the_question, points, answersList };
            
            const response = await fetch("http://localhost:5000/edit_test", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            setModalShow(true);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <div className="title-container">
                <h1>Teszt készítése</h1>
            </div>
            <div className="test-form-container">
                <form onSubmit={onSubmitForm}>
                <h4>Feladat törzse:</h4>
                    <div className="test-padding-container">
                        <label>Cím: </label>
                        <input type="text" name="title" placeholder={title} className="form-control my-3" value={title} onChange={e => onChange(e)}/>
                        <label>Ez egy publikus feladat?</label>
                        <input type="checkbox" name="is_public" onChange={e => onChange(e)}></input>
                        <p>Válassza ki az osztályt amelyikhez a feladatot rendelni szeretné: </p>
                        <select className="form-control" id="class_id" name="class_id" value={class_id} onChange={e => onChange(e)}>
                            <option value="simple">Nincs megadva.</option>
                            <option value="simple">1/A - Budapesti Általános Iskola</option>
                        </select><br/>
                        <p>Kategória: </p>
                        <input type="text" name="category" placeholder={category} className="form-control my-3" value={category} onChange={e => onChange(e)}/>
                        
                        <p>A feladat szövege: </p>
                        <textarea name="text_of_the_question" placeholder={text_of_the_question} className="form-control my-3" value={text_of_the_question} onChange={e => onChange(e)}/>
                        <p>A feladatra kapható pontok összege: </p>
                        <input type="number" name="points" placeholder={points} className="form-control my-3" value={points} onChange={e => onChange(e)}/> 
                    </div>

                    <h4>Feladat megoldása:</h4>
                        <div className="test-padding-container">
                            <p>Teszt típus: </p>
                            <select className="form-control" id="test_type" name="test_type" value={test_type} onChange={e => onChange(e)}>
                                <option value="simple">Kérdés-válasz</option>
                                <option value="glazed">Húzd és ejtsd</option>
                                <option value="pairing">Párosítós</option>
                                <option value="dropdownlist">Legördülő lista</option>
                                <option value="textinput">Szöveges válasz</option>
                            </select><br/>
                            <label>Adja meg az opciók számát:</label>
                            <input type="number" min={0} max={10} name="options" placeholder={options} className="form-control my-3" value={options} onChange={e => onChange(e)}/>
                            {
                                CheckTaskType(test_type, options)
                            }
                            <p></p>
                        </div>
                    
                    <button className="btn-left btn btn-success">Mentés</button>
                </form>
                <ButtonToolbar>
                    <AddModal
                    show={modalShow}
                    onHide={addModalClose}
                    modalTitle={"Sikeres mentés."}
                    />
                </ButtonToolbar>
            </div>
        </>
    )
}
export default EditTest;