import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArwQpcLtXbFAjh_XUjjXUTUqcSB5d-u_E",
  authDomain: "text-32862.firebaseapp.com",
  projectId: "text-32862",
  storageBucket: "text-32862.appspot.com",
  messagingSenderId: "223385434852",
  appId: "1:223385434852:web:a1b1b2b4d4ff6996594af1",
  measurementId: "G-ETP7KSH607",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
