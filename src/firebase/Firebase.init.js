// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq5f8CPVnpVGtLTvDsB8UGUJdfhDn2tWw",
  authDomain: "ema-jhon-664fe.firebaseapp.com",
  projectId: "ema-jhon-664fe",
  storageBucket: "ema-jhon-664fe.appspot.com",
  messagingSenderId: "930964899914",
  appId: "1:930964899914:web:9aa0f68c0b71ed819b7eb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth