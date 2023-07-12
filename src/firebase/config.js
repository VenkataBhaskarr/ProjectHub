// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGP0w22JMBnEP0XK_uoGBlHv7agcu0Xps",
    authDomain: "vitprojecthub.firebaseapp.com",
    projectId: "vitprojecthub",
    storageBucket: "vitprojecthub.appspot.com",
    messagingSenderId: "88478529393",
    appId: "1:88478529393:web:34214f9233207c93a8e8d0",
    measurementId: "G-SE1TEBY2RJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);