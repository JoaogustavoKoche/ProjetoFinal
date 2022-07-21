import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAm1zYc5RJCL1AblQdX_004AKuRevoE1Gc",
    authDomain: "compassfinal.firebaseapp.com",
    projectId: "compassfinal",
    storageBucket: "compassfinal.appspot.com",
    messagingSenderId: "229352752140",
    appId: "1:229352752140:web:bf5aef824089f15d8d5a29"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);