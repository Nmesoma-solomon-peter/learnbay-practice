import React, { useState } from 'react'
import { db } from './firestore';
import { useNavigate } from 'react-router-dom';

function AddNewContact() {
    

const navigate = useNavigate();
const [name, contactName] = useState("");
const [number, contactNumber] = useState("");
const [email, contactEmail] = useState("");


function setName(event) {
    contactName(event.target.value);
}
function setNumber(event) {
    contactNumber(event.target.value);
}
function setEmail(event){
    contactEmail(event.target.value);
}

function create(){
    db.collection("contact-app").add({
        name,
        number,
        email
    })
    navigate("/home");
}
    return (
        <div>
            <input type="text" placeholder='name' onChange={setName} />
            <input type="number" placeholder="Phone Number" onChange={setNumber} />
            <input type="email" placeholder='email Address' onChange={setEmail}/>
            <button onClick={create}>Add contact</button>
        </div>
    )
}

export default AddNewContact