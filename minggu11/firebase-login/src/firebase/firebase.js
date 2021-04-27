import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    // Your config values
    apiKey: "AIzaSyC_VgdayZnH8MJEdkVaJZcDYecvNGmPICo",
    authDomain: "react-loginfirebase.firebaseapp.com",
    databaseURL: "https://react-loginfirebase-default-rtdb.firebaseio.com",
    projectId: "react-loginfirebase",
    storageBucket: "react-loginfirebase.appspot.com",
    messagingSenderId: "1033562874424",
    appId: "1:1033562874424:web:34bbecd46e9dda0354bccd",
    measurementId: "G-R6TEYEFHBL"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;