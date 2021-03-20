import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDD6v81aLenZQpT51HDuE-tQkjHUMGgPlg",
    authDomain: "pern-todo-react.firebaseapp.com",
    projectId: "pern-todo-react",
    storageBucket: "pern-todo-react.appspot.com",
    messagingSenderId: "383867542748",
    appId: "1:383867542748:web:a7e1aa188e438971912819"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);
 const auth = fire.auth()

 export {auth}