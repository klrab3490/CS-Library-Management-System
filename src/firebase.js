import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC7vCpQrxEo8LFdAQU3XjtWFxam44B6wFY",
  authDomain: "tutorial-99878.firebaseapp.com",
  projectId: "tutorial-99878",
  storageBucket: "tutorial-99878.appspot.com",
  messagingSenderId: "287294957386",
  appId: "1:287294957386:web:f237c3f350824475efc3b3"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();