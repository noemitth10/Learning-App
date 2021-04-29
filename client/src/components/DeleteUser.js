import React, { useState } from "react"
import { Link } from "react-router-dom";
import moment from 'moment'
import AddModal from "./tasks/taskTypes/AddModal"

import "../styles/Authentication.css"

const DeleteUser = ({setAuth}) => {
    const [modalTitle, setModalTitle] = useState(null);
    const [modalHeader, setModalHeader] = useState(null);
    const [modalShow, setModalShow] = React.useState(false);

    const addModalClose = () => setModalShow(false);

    const [inputs, setInputs] = useState({
       email: "",
       password: ""
    });

    const {email, password} = inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]
        : e.target.value});
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const body = { email, password};

            const response = await fetch("http://localhost:5000/auth/delete_user", {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();

            setModalTitle("Sikeres felhasználó törlés.");
            setModalHeader("Az Ön felhasználóját töröltük rendszerünkből.");
            setModalShow(true);

            setTimeout(function(){ 
                localStorage.setItem("token", null)
                localStorage.setItem("id", null)
                setAuth(false);
            }, 10000);
        } catch (error) {
            console.error(error.message);
        }
    }
    
    return (
    <>
        <div className="title-container">
            <h1>Profil törlése</h1>
        </div>
        <div className="form-container">
        <p>Kérjük, a felhasználói fiókod törléséhez add meg jelenlegi email címed és jelszavad.</p>
        <form onSubmit={onSubmitForm}>
            <input type="email" name="email" placeholder="Email cím" className="form-control my-3" value={email} onChange={e => onChange(e)}/>
            <input type="password" name="password" placeholder="Jelszó" className="form-control my-3" value={password} onChange={e => onChange(e)}/>
            
            <button className="btn-left btn btn-success">Fiók törlése</button>
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
export default DeleteUser;