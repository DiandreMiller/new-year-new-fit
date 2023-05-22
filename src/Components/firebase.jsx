// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_WzXfx5LkOmuKGmZ5yF45CGU6leFoWQ8",
  authDomain: "new-year-new-fit-c78c4.firebaseapp.com",
  projectId: "new-year-new-fit-c78c4",
  storageBucket: "new-year-new-fit-c78c4.appspot.com",
  messagingSenderId: "575255318402",
  appId: "1:575255318402:web:414a528553530fb579499b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

