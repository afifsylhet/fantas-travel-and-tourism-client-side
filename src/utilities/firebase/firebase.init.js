import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";



const fireBaseInit = () => {
    initializeApp(firebaseConfig)
};

export default fireBaseInit;