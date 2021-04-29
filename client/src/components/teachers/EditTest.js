import React, { useState, useEffect } from "react"
import { ButtonToolbar } from "react-bootstrap";
import AddModal from "../tasks/taskTypes/AddModal"

import "./teachers.css"

const EditTest = () => {
    const [modalTitle, setModalTitle] = useState(null);
    const [modalHeader, setModalHeader] = useState(null);
    const [modalShow, setModalShow] = React.useState(false);

    const addModalClose = () => setModalShow(false);

    let answer_id = 0;
    const [answerArray, setAnswerArray] = [];
    let answerLength = 0;

    const [input, setInput] = useState({
        title: undefined,
        test_type: undefined,
        owner_id: localStorage.user_id,
        class_id: undefined,
        is_public: true,
        category: undefined,
        text_of_the_question: undefined,
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

    var elements_simple = [];
        var elements_default = [];
    const [answersList, setAnswers] = useState([]);

    let { title, test_type, owner_id, class_id, is_public, category,
            text_of_the_question, answers, points, options } = input;
    let { question_text, answer_text, correct} = answer_;

    const onChange = (e) => {
        setInput({...input, [e.target.name]
        : e.target.name === "is_public" ? !e.target.checked : e.target.value});
 
        if(e.target.name == "options") answerLength = answerLength + e.target.value;
    }

    const onChangeAnswer = (e) => {
        let meglevo = false;
        let cel = e.target.name;
        let ertek = e.target.value;

        const newAnswer = {
            answer_id: e.target.id,
            question_text: undefined,
            answer_text: undefined,
            correct: undefined
        }

        for (let i = 0; i < answersList.length; i++) {
            if(answersList[i].answer_id == e.target.id) {
                if (cel == "answer_text") answersList[i].answer_text = ertek;
                else if(cel == "question_text") answersList[i].question_text = ertek;
                else if(cel == "correct") answersList[i].correct = e.target.checked;
                meglevo = true;
            }
        }

        if(!meglevo) {
            if (cel == "answer_text") newAnswer.answer_text = ertek;
            else if(cel == "question_text") newAnswer.question_text = ertek;
            else if(cel == "correct") newAnswer.correct = e.target.checked;
            setAnswers(oldArray => [...oldArray, newAnswer]);
        }
    }

    const deletefromAnswers = (id, type) => {
        const newList = [];
        for (const answer of answersList) {
            if(answer.answer_id != id)
                newList.push(answer);
        }

        document.getElementById("div-" + id).style.visibility = "hidden";
        document.getElementById("div-" + id).style.height = 0;

        let old = document.querySelector('input[name="options"]').value;
        document.querySelector('input[name="options"]').value = old-1;
        if(type == "simple") {
            for (let index = 0; index < elements_simple.length; index++)
                if(elements_simple[index].props.id == "div-" + id) elements_simple.splice(0, index);

        options--;    
        }

    }

    const CheckTaskType = ((task_type, options) => {
        for(var i =0; i < options; i++){
            answer_id += 1;
            switch(task_type) {
                case 'simple':
                    elements_simple.push(
                        <div id={"div-" + answer_id}>
                        <h5>Opció</h5>
                        <div className="test-padding-container" style={{display : "block"}}>
                            <p>Válasz: </p>
                            <span id="edit-test-answer-simple" className="error-message">A válasz mező üres.</span>
                            <input type="text" id={answer_id} name="answer_text" placeholder={answer_text} className="form-control my-3" value={answer_text} onChange={e => onChangeAnswer(e)}/>
                            <label>Ez a helyes válasz?</label>
                            <input type="checkbox" id={answer_id} name="correct" onChange={e => onChangeAnswer(e)}></input><br/>
                            <button id={answer_id} type="button" className="btn btn-danger" onClick={(e) => deletefromAnswers(e.target.id, "simple")}>Törlés</button>
                        </div>
                        </div>
                    );
                default:
                    elements_default.push(
                        <div id={"div-" + answer_id}>
                        <h5>Opció</h5>
                        <div className="test-padding-container">
                                <p>Kérdés: </p>
                                <span id="edit-test-question-def" className="error-message">A kérdés mező üres.</span>
                                <input type="text" id={answer_id} name="question_text" placeholder={question_text} className="form-control my-3" value={question_text} onChange={e => onChangeAnswer(e, input.id)}/><br/>
                                
                                <p>Válasz: </p>
                                <span id="edit-test-answer-def" className="error-message">A válasz mező üres.</span>
                                <input type="text" id={answer_id} name="answer_text" placeholder={answer_text} className="form-control my-3" value={answer_text} onChange={e => onChangeAnswer(e, input.id)}/>
                                

                                <button type="button" className="btn btn-danger">Törlés</button>
                        </div>
                        </div>
                    );
            }
        }

        if(task_type == "simple") return elements_simple;
        else return elements_default;
    });

    async function onSubmit(e) {
        e.preventDefault();

        try {
            console.log(answersList)
            let isAnswer = false;

            const body = { title, test_type, owner_id, class_id, is_public, category, text_of_the_question, points, answersList };

    
            if(title == undefined || !title.replace(/\s/g, '').length) { document.getElementById("edit-test-title").style.display = "block"; return; }
            else { document.getElementById("edit-test-title").style.display = "none"; }
        
            if(category == undefined || !category.replace(/\s/g, '').length) { document.getElementById("edit-test-category").style.display = "block"; return; }
            else { document.getElementById("edit-test-category").style.display = "none"; }

            if(text_of_the_question == undefined || !text_of_the_question.replace(/\s/g, '').length) { document.getElementById("edit-test-text").style.display = "block"; return; }
            else { document.getElementById("edit-test-text").style.display = "none"; }

            if(test_type == "choose" || test_type == undefined) { document.getElementById("edit-test-select").style.display = "block"; return; }
            else { document.getElementById("edit-test-select").style.display = "none"; }

            if(options < 2) { document.getElementById("edit-test-options").style.display = "block"; return; }
            else { document.getElementById("edit-test-options").style.display = "none"; }

            if(answersList.length == 0) { document.getElementById("edit-test-noanswers").style.display = "block"; return; }
            else { document.getElementById("edit-test-noanswers").style.display = "none"; }

            for (const a of answersList) {
                console.log(a)
                if(a.answer_text == undefined || !a.answer_text.replace(/\s/g, '').length)  { document.getElementById("edit-test-answer-def").style.display = "block"; return; }

                if(test_type != "simple") {
                    if(a.question_text == undefined || !a.question_text.replace(/\s/g, '').length)  { document.getElementById("edit-test-question-def").style.display = "block"; return; }
                }

                if(test_type == "simple" && a.correct == true) isAnswer = true;
            }

            if(test_type == "simple" && isAnswer == false) { document.getElementById("edit-test-answerckeckbox").style.display = "block"; return; }
            else { document.getElementById("edit-test-answerckeckbox").style.display = "none"; }

            if(answersList.length >= 2) {
                const response = await fetch("http://localhost:5000/edit_test", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                });
                
                setModalTitle("Sikeres feladat hozzáadás.");
                setModalHeader("Az Ön feladatát elmentettük.");
                setModalShow(true); 
            }
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
                <form onSubmit={onSubmit}>
                <h4>Feladat törzse:</h4>
                    <div className="test-padding-container">
                        <span id="edit-test-title" className="error-message">A feladat címének megadása kötelező.</span>
                        <label>Cím: </label>
                        <input type="text" name="title" placeholder={title} className="form-control my-3" value={title} onChange={e => onChange(e)}/>
                        <label>Ez egy publikus feladat?</label>
                        <input type="checkbox" name="is_public" onChange={e => onChange(e)}></input>
                        <p>Válassza ki az osztályt amelyikhez a feladatot rendelni szeretné: </p>
                        <select className="form-control" id="class_id" name="class_id" value={class_id} onChange={e => onChange(e)}>
                            <option value="simple">Nincs megadva.</option>
                            <option value="simple">1/A - Budapesti Általános Iskola</option>
                        </select><br/>
                        <span id="edit-test-category" className="error-message">A feladat kategóriájának megadása kötelező.</span>
                        <p>Kategória: </p>
                        <input type="text" name="category" placeholder={category} className="form-control my-3" value={category} onChange={e => onChange(e)}/>
                        <span id="edit-test-text" className="error-message">A feladat szövegének megadása kötelező.</span>
                        <p>A feladat szövege: </p>
                        <textarea name="text_of_the_question" placeholder={text_of_the_question} className="form-control my-3" value={text_of_the_question} onChange={e => onChange(e)}/>
                        <p>A feladatra kapható pontok összege: </p>
                        <input type="number" name="points" placeholder={points} className="form-control my-3" value={points} onChange={e => onChange(e)}/> 
                    </div>

                    <h4>Feladat megoldása:</h4>
                        <div className="test-padding-container">
                            <p>Teszt típus: </p>
                            <span id="edit-test-select" className="error-message">Kérem válasszon feladattípust.</span>
                            <select className="form-control" id="test_type" name="test_type" value={test_type} onChange={e => onChange(e)}>
                                <option value="choose">Kérem válasszon...</option>
                                <option value="simple">Kérdés-válasz</option>
                                <option value="glazed">Húzd és ejtsd</option>
                                <option value="pairing">Párosítós</option>
                                <option value="dropdownlist">Legördülő lista</option>
                                <option value="textinput">Szöveges válasz</option>
                            </select><br/>
                            <span id="edit-test-options" className="error-message">Az opciók száma legalább 2 kell hogy legyen.</span>
                            <label>Adja meg az opciók számát:</label>
                            <input type="number" min={0} max={10} name="options" placeholder={options} className="form-control my-3" value={options} onChange={e => onChange(e)}/>
                            <span id="edit-test-noanswers" className="error-message">Még nem adott meg válasz opciókat.</span>
                            <span id="edit-test-answerckeckbox" className="error-message">Nem adott meg helyes válasz opciót.</span>
                            {
                                CheckTaskType(test_type, options)
                            }
                            <p></p>
                        </div>
                    
                    <button className="btn-left btn btn-success">Mentés</button>
                </form>
                <AddModal
                show={modalShow}
                onHide={addModalClose}
                modalTitle={modalTitle}
                modalHeader={modalHeader}
                />
            </div>
        </>
    )
}
export default EditTest;