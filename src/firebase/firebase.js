import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "team-171.firebaseapp.com",
  databaseURL: "https://team-171.firebaseio.com",
  projectId: "team-171",
  storageBucket: "team-171.appspot.com",
  messagingSenderId: "156600228620",
  appId: "1:156600228620:web:1ee875eddfc4e1ac924729",
  measurementId: "G-900LM3QSZQ",
}

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
