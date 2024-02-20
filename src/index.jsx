import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue, off } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAorKhXAIuLJGTwxipOR2b2x1MrQSaZOg0",
    authDomain: "fir-lecture-49c05.firebaseapp.com",
    databaseURL: "https://fir-lecture-49c05-default-rtdb.firebaseio.com",
    projectId: "fir-lecture-49c05",
    storageBucket: "fir-lecture-49c05.appspot.com",
    messagingSenderId: "744144035493",
    appId: "1:744144035493:web:102d2b9426f7028b14774c"
  };

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);
const database = getDatabase(firebase_app);

export { auth, database, ref, onValue, off  };