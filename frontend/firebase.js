import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmEnVJ1Ub7rJ7F0GGE9G4BRT6w_NGygeM",
  authDomain: "finvue-e2d75.firebaseapp.com",
  projectId: "finvue-e2d75",
  storageBucket: "finvue-e2d75.appspot.com",
  messagingSenderId: "81250037484",
  appId: "1:81250037484:web:9721292dd0c2a2714f3fc9",
  measurementId: "G-5SP54QCGE2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};