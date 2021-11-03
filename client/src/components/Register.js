import React, { useState } from "react"
import { Link } from "react-router-dom";
import moment from 'moment'
import AddModal from "./tasks/taskTypes/AddModal"

import "../styles/Authentication.css"

const Register = ({setAuth}) => {
    const [modalTitle, setModalTitle] = useState(null);
    const [modalHeader, setModalHeader] = useState(null);
    const [modalShow, setModalShow] = React.useState(false);

    const addModalClose = () => setModalShow(false);

    const [inputs, setInputs] = useState({
       email: "",
       password: "",
       name: "",
       date_of_birth: moment()
       .locale('en')
       .format('YYYY-MM-DD'),
       gender: "Férfi",
       city: ""
    });

    const {email, password, name, date_of_birth, gender, city} = inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]
        : e.target.value});
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const body = { email, password, name, date_of_birth, gender, city};

            const response = await fetch("http://localhost:5000/auth/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();
            
            if(parseRes == "User already exist." || parseRes == "Missing Credentials" || parseRes == "Invalid Email") {
                showErrorMessage(parseRes);
            } else {
                setModalTitle("Sikeres regisztráció.");
                setModalHeader("Az Ön regisztrációja sikeres volt.");
                setModalShow(true);

                localStorage.setItem("token", parseRes.token)
                setAuth(true);
            } 
        } catch (error) {
            console.error(error.message);
        }
    }

    function showErrorMessage(message) {
        if(message == "User already exist.") document.getElementById("email-exist-error").style.display = "block";
        if(message == "Missing Credentials") document.getElementById("missing-error").style.display = "block";
    }
    
    return (
    <>
        <div className="title-container">
            <h1>Regisztráció</h1>
        </div>
        <div className="form-container">
        <form onSubmit={onSubmitForm}>
        <span id="missing-error" className="error-message">Hiányzó adatok. A regiszrációhoz töltse ki a csillaggal jelölt mezőket.</span>
        <span id="email-exist-error" className="error-message">Ezzel az email címmel már tegisztráltak.</span>
            <input type="email" autoComplete="off" name="email" placeholder="Email cím *" className="form-control my-3" value={email} onChange={e => onChange(e)}/>
            <input type="password" name="password" placeholder="Jelszó *" className="form-control my-3" value={password} onChange={e => onChange(e)}/>
            <input type="text" autoComplete="off" name="name" placeholder="Név *" className="form-control my-3" value={name} onChange={e => onChange(e)}/>
            <input type="date" name="date_of_birth" placeholder="Születési dátum" className="form-control my-3" value={date_of_birth} onChange={e => onChange(e)}/>
            <select className="form-control" id="gender" name="gender" value={gender} onChange={e => onChange(e)}>
                <option value="Férfi">Férfi</option>
                <option value="Nő">Nő</option>
            </select>
            <input type="text" autoComplete="off" name="city" placeholder="Város" className="form-control my-3" value={city} onChange={e => onChange(e)}/>
            <button className="btn-left btn btn-success">Regisztráció</button>
            <div  className="link">
                Már van felhasználód? <Link to="/login"><p className="p-link">Kattints ide...</p></Link>
            </div>
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
export default Register;