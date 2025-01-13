import React from 'react'
import {auth, provider} from '../firebase.js';
import { signInWithPopup } from 'firebase/auth';

function Signin() {
    function pleaseSignin(){
        // logic to sign in using google
        signInWithPopup(auth,provider)
        .then(
            console.log("successfully singined")
        )
        .catch()

    }
  return (
    <div>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quia assumenda recusandae, molestiae unde at distinctio quaerat. Aspernatur tempora magnam harum consectetur voluptates sit cupiditate! Quod mollitia eos impedit quo!</h2>
        <button onClick={pleaseSignin}>signin with google</button>
    </div>
  )
}

export default Signin