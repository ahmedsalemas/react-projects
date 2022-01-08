import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZjz1-k6rCqXbSjPmWkX1L7u_9N9lmPrw",
    authDomain: "net-ninja-marioplan-86378.firebaseapp.com",
    projectId: "net-ninja-marioplan-86378",
    storageBucket: "net-ninja-marioplan-86378.appspot.com",
    messagingSenderId: "207177329549",
    appId: "1:207177329549:web:6b91148b77c2a3d8f5ebc4",
    measurementId: "G-NRMGXT5PY2"
};



firebase.initializeApp(firebaseConfig);
firebase.firestore()


export default firebase;