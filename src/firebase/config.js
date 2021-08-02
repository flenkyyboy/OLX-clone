import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4zOpgxqFX2ooOwT8J7dshDs3959J9kss",
    authDomain: "fir-7ed40.firebaseapp.com",
    projectId: "fir-7ed40",
    storageBucket: "fir-7ed40.appspot.com",
    messagingSenderId: "123351575678",
    appId: "1:123351575678:web:f1218ea86b6d7b7c44bc2f",
    measurementId: "G-C82145Q66R"
};

export default firebase.initializeApp(firebaseConfig)