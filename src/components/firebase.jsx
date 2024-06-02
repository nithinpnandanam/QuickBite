// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYmUAut1BBHR5KiO6dZjsNSURtF0kYIDM",
  authDomain: "quickbite-af7b7.firebaseapp.com",
  projectId: "quickbite-af7b7",
  storageBucket: "quickbite-af7b7.appspot.com",
  messagingSenderId: "763759773101",
  appId: "1:763759773101:web:0f8be697a6afc728c58d24",
  measurementId: "G-0PRMCV8CPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);