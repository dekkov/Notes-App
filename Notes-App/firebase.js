// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvvBz3wrIL1TCy07DVzRy3t1H1JUW7OMk",
  authDomain: "react-notes-87228.firebaseapp.com",
  projectId: "react-notes-87228",
  storageBucket: "react-notes-87228.appspot.com",
  messagingSenderId: "435891510869",
  appId: "1:435891510869:web:8cded11c87ad548cc17edc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const notesCollection = collection(db, "notes")