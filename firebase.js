import { initializeApp } from "firebase/app";
import { GoogleAuthProvider , getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9bdPspx7uOW5HuUlgJbySUCkvrKcrrFw",
  authDomain: "uber-clone-dc95a.firebaseapp.com",
  projectId: "uber-clone-dc95a",
  storageBucket: "uber-clone-dc95a.appspot.com",
  messagingSenderId: "887058647498",
  appId: "1:887058647498:web:9f34d1b9c0fada21636733"
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth } 