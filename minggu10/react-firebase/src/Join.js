import React, { useState, useContext } from "react";
import { AuthContext } from "./index";
import firebase from "firebase";
import 'firebase/auth';

const Join = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const Auth = useContext(AuthContext);
    const handleForm = e => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            if (res.user) Auth.setLoggedIn(true);
        })
        .catch(e => {
            setError(e.message);
        });
    };

    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    const signUpWithGoogle = () => {
        auth.signInWithPopup(googleProvider).then((res) => {
            if (res.user) Auth.setLoggedIn(true);
        }).catch(e => {
            setError(e.message);
        });
    }

    return (
        <div>
            <h1>Join</h1>
            <form onSubmit = {e => handleForm(e)}>
                <input
                value = {email}
                onChange = {e => setEmail(e.target.value)}
                name = "email"
                type =  "email"
                placeholder = "E-mail"
                />

                <input
                value = {password}
                onChange = {e => setPassword(e.target.value)}
                name = "password"
                type =  "password"
                placeholder = "Password"
                />
                <hr />
                <button className="googleBtn" type="button" onClick ={signUpWithGoogle} >
                    <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Google_logo_%282013-2015%29.svg"
                    alt="logo"
                    />
                    Join With Google
                </button>
                <button type="submit">Join</button>
                <span>{error}</span>
            </form>
        </div>
    );
};

export default Join;