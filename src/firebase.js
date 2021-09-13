// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey              : process.env.REACT_APP_API_KEY ,
    authDomain          : process.env.REACT_APP_AUTH_DOMAIN,
    projectId           : process.env.REACT_APP_PROJECT_ID ,
    storageBucket       : process.env.REACT_APP_STORAGE_BUCKET ,
    messagingSenderId   : process.env.REACT_APP_MESSAGING_SENDER_ID ,
    appId               : process.env.REACT_APP_APP_ID ,
};
// const auth = getAuth();

// Initialize Firebase
initializeApp(firebaseConfig);

export const fbaseAuth = getAuth();
// export const fbaseCreateUserWithEmailAndPassword = createUserWithEmailAndPassword();
// export const fbaseSignInWithEmailAndPassword = signInWithEmailAndPassword();
export const fbaseCreateUserWithEmailAndPassword = async (email , password) => {
    let user;

    try {
        const userCredential = await createUserWithEmailAndPassword(fbaseAuth, email, password);
        user = userCredential.user;
    } catch (error) {
        console.log(error);
    }

    return user;
};
export const fbaseSignInWithEmailAndPassword = async (email , password) => {
    let user;

    try {
        const userCredential = await signInWithEmailAndPassword(fbaseAuth, email, password);
        user = userCredential.user;
    } catch (error) {
        console.log(error);
    }

    return user;
};
