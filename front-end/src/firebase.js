import firebase from "firebase/compat/app";
import "firebase/compat/auth"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsvfRWex9sXTh407iunpLk6C57isawZOE",
    authDomain: "mern-whatsapp-1b1da.firebaseapp.com",
    projectId: "mern-whatsapp-1b1da",
    storageBucket: "mern-whatsapp-1b1da.appspot.com",
    messagingSenderId: "843457938089",
    appId: "1:843457938089:web:ac7c147898692fdea61fb8",
    measurementId: "G-LET3MJKNBX"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
 