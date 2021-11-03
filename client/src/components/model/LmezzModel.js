import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap"
import AddModal from "../tasks/taskTypes/AddModal"
import "./model.css"
import axios from "axios"

const LmezzModel = () => {
    const [sentences, setSentences] = useState({
        "sentence" : ""
    });
    const [taggedSentence, setTaggedSentence] = useState([]);
    const [modalTitle, setModalTitle] = useState(null);
    const [modalHeader, setModalHeader] = useState(null);
    const [modalShow, setModalShow] = React.useState(false);

    const addModalClose = () => setModalShow(false);

    let word = {
        text: "",
        lab: "",
        dep: ""
    }

    const { sentence } = sentences;

    const config = {
        headers: {'Access-Control-Allow-Origin': '*'}
    };

    const onChange = (e) => {
        setSentences({sentence : e.target.value});
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            if(sentences.sentence == null || sentences.sentence == "") {
                setModalTitle("Hiba.");
                setModalHeader("Nem adott meg mondatot.");
                setModalShow(true);
                return;
            } else if(!sentences.sentence.replace(/\s/g, '').length) {
                setModalTitle("Hiba.");
                setModalHeader("A mondat csak szóközöket tartalmaz.");
                setModalShow(true);
                return;
            }

            axios.post('http://127.0.0.1:8080/analyze', sentences, config)
            .then(response => {
                setTaggedSentence(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        } catch (error) {
            console.error(error.message);
        }
    }

    let word_div = [];
    const returnWithSentence = () => {
        let { text, lab, dep } = word;

        for (let i = 0; i < taggedSentence.length; i++) {
            const element = taggedSentence[i]; 
            text = element[0];
            lab = element[1];
            dep = element[2];

            let temp_div = <div className="fancy_box">
                                <h4>{text}</h4>
                                <p>{lab}</p>
                            </div>
            

            switch (lab) {
                case "Á":
                    lab = "állítmány"
                    temp_div = <div className="fancy_box">
                                    <h4 style={{ textDecorationLine: "underline", textDecorationStyle: "double", textDecorationSkipInk: "none"}}>{text}</h4>
                                    <p>{lab}</p>
                                </div>
                    break;
                case "A":
                    lab = "alany"
                    temp_div = <div className="fancy_box" style={{backgroundColor: "#ff8566", border: "2px solid #ff3300"}}>
                                    <h4 style={{ textDecorationLine: "underline", textDecorationSkipInk: "none", textDecorationStyle: "solid"}}>{text}</h4>
                                    <p>{lab}</p>
                                </div>
                    break;
                case "T": 
                    lab = "tárgy"
                    temp_div = <div className="fancy_box" style={{backgroundColor: "#ffff80", border: "2px solid #de9a26"}}>
                                    <h4 style={{ textDecorationLine: "underline",textDecorationStyle: "dashed", textDecorationSkipInk: "none"}}>{text}</h4>
                                    <p>{lab}</p>
                                </div>
                    break;
                case "H": 
                    lab = "határozó"
                    temp_div = <div className="fancy_box" style={{backgroundColor: "#b3ecff", border: "2px solid #1ac6ff"}}>
                                   <h4 style={{ textDecorationLine: "underline",textDecorationStyle: "wavy", textDecorationSkipInk: "none"}}>{text}</h4>
                                    <p>{lab}</p>
                                </div>
                    break;
                case "J": 
                    lab = "jelző"
                    temp_div = <div className="fancy_box" style={{backgroundColor: "#d9b3ff", border: "2px solid #a64dff"}}>
                                    <h4 style={{ textDecorationLine: "underline",textDecorationStyle: "dotted", textDecorationSkipInk: "none"}}>{text}</h4>
                                    <p>{lab}</p>
                                </div>
                    break;
                case "P": 
                    lab = "nem elemezzük"
                    temp_div = <div className="fancy_box" style={{backgroundColor: "#d9d9d9", border: "2px solid #808080"}}>
                                    <h4>{text}</h4>
                                    <p>{lab}</p>
                                </div>
                    break;
                case "X":
                    lab = "nem elemezzük"
                    temp_div = <div className="fancy_box" style={{backgroundColor: "#d9d9d9", border: "2px solid #808080"}}>
                                    <h4>{text}</h4>
                                    <p>{lab}</p>
                                </div>
                    break;
                default:
                    break;
            }

            word_div.push(
                temp_div
            )
        }

        return (
            <div>
                {taggedSentence &&
                    <p>{word_div}</p>
                }
            </div>
        )
    }

    return (
        <>
            <div className="title-container">
                <h1>Elemezzünk együtt!</h1>
            </div>
            <div className="model-input">
                <p>Szeretnéd ki próbálni, hogyan képes az <strong>LMEZZ</strong> valós időben elemezni egy általad megadott mondatot? Itt kipróbálhatod!</p>
                <form onSubmit={onSubmit}>
                    <label> Add meg a mondatot, amit elemezni szeretnél:</label>
                    <input className="form-control my-3 input-text" type="text" name="sentence"  value={sentence} autoComplete="off" onChange={e => onChange(e)}/><br/>
                    <button className="btn-left btn btn-success model-btn" variant="secondary">Kész</button>
                </form>
            </div>
            <h4 style={{paddingLeft: "2%", marginBottom: "2%"}}>Elemzett mondat:</h4>
            <div className="model-output">
                {
                    returnWithSentence()
                }
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
export default LmezzModel;