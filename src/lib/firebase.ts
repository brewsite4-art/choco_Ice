import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCMSaN0i2cNFjyJEkfAhCuLpZ-09FHEMGE",
    authDomain: "chocoice-3494f.firebaseapp.com",
    projectId: "chocoice-3494f",
    storageBucket: "chocoice-3494f.firebasestorage.app",
    messagingSenderId: "973853822215",
    appId: "1:973853822215:web:d28633817f6768615a49a2",
};

const app = initializeApp(firebaseConfig);

//  Firestore (ce qu’on utilise pour les avis)
export const db = getFirestore(app);