import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import * as moment from 'moment'
import { Button, Alert, ButtonToolbar } from "react-bootstrap";
import AddModal from "./tasks/taskTypes/AddModal"
import {Redirect} from 'react-router-dom';

import "../styles/User_profile.css"

const UpdateUser = ({setAuth}) => {
    const [modalShow, setModalShow] = React.useState(false);
    const user = JSON.parse(localStorage.getItem("user") || "[]");

    const [inputs, setInputs] = useState({
        user_id: user.user_id,
        email: user.email,
        name: user.name,
        date_of_birth: user.date_of_birth,
        gender: user.gender,
        city: user.city
     });

     console.log(inputs)

    const {user_id, email, name, date_of_birth, gender, city} = inputs;

    const addModalClose = () => setModalShow(false);

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]
        : e.target.value});
        console.log(gender);
    }

    async function onSubmitForm(e) {
        e.preventDefault();

        try {
            const body = { user_id, email, name, date_of_birth, gender, city};

            const response = await fetch("http://localhost:5000/auth/update", {
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
            <h1>Profil adatok szerkesztése</h1>
        </div>
        <div className="container-right">
            <img src="http://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="Userpicture"/>
            <div className="buttons">
                <button className="btn btn-primary logout-button" disabled>Profilkép szerkesztése</button>
                <button className="btn btn-primary logout-button"><Link to="/dashboard">Vissza mentés nélkül</Link></button>
            </div>
            
        </div>
        <div className="container-left">
        <form onSubmit={onSubmitForm}>
            <input type="email" name="email" placeholder={email} className="form-control my-3" value={email} onChange={e => onChange(e)}/>
            <input type="text" name="name" placeholder={name} className="form-control my-3" value={name} onChange={e => onChange(e)}/>
            <input type="date" name="date_of_birth" placeholder={date_of_birth} className="form-control my-3" value={date_of_birth} onChange={e => onChange(e)}/>
            <select className="form-control" id="gender" name="gender" value={gender} onChange={e => onChange(e)}>
                <option value="Férfi">Férfi</option>
                <option value="Nő">Nő</option>
            </select>
            <input type="text" name="city" placeholder={city} className="form-control my-3" value={city} onChange={e => onChange(e)}/>
            <button className="btn-left btn btn-success">
                Mentés
            </button>
        </form>
        <button className="btn btn-warning logout-button">Profil törlése</button>
              <ButtonToolbar>
                <AddModal
                  show={modalShow}
                  onHide={addModalClose}
                  modalTitle={"Sikeres mentés."}
                  modalHeader={"A felhasználó új adatai mentésre kerültek."}
                />
              </ButtonToolbar>
        </div>
    </>
    )
}
export default UpdateUser;