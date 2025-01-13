import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login(props) {
    // setting password and username
    const userName = "nmesoma"
    const password = "welcome@123"
   const navigate = useNavigate();

    // useState to collect entered Username and password
    const [collectedUserName, setCollectedUserName] = useState("");
    const [collectedPassword, setCollectedPassword] = useState("");

    // function to collect and store entered details to the useState.
    function collectUserName(event) {
        setCollectedUserName(event.target.value);
    }
    function collectPassword(event) {
        setCollectedPassword(event.target.value);
    }
    function checkPassword() {
        if(collectedUserName == userName && collectedPassword == password){
            alert("loggedIn");
            props.setIsLoggedIn(true);
            navigate("/home")
        }
    }
    return (
        <div>
            <input type="text" placeholder='Enter Username' onChange={collectUserName} />
            <input type="password" placeholder='Enter password' onChange={collectPassword} />
            <button onClick={checkPassword}>Submit</button>
        </div>
    )
}
export default Login