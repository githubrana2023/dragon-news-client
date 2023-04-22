import {getAuth} from 'firebase/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkX6xWKOC3aDNEJclq_P7cHcOJezgKE2Y",
  authDomain: "dragon-news-5b17f.firebaseapp.com",
  projectId: "dragon-news-5b17f",
  storageBucket: "dragon-news-5b17f.appspot.com",
  messagingSenderId: "48224721035",
  appId: "1:48224721035:web:4f34c730f301d5051edc8e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth