// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_KP7RX06HOs13KvLpwGybAzA6JRTqnnw",
    authDomain: "lingo-bingo-37a0b.firebaseapp.com",
    projectId: "lingo-bingo-37a0b",
    storageBucket: "lingo-bingo-37a0b.firebasestorage.app",
    messagingSenderId: "143984257672",
    appId: "1:143984257672:web:96c66af92efddbda884d3d",
    measurementId: "G-VH84BRVY3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);