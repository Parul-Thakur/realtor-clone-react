
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAB6QKl1W2paFl2jUItfaPiIAOhhPRZE1o",
  authDomain: "realtor-clone-react-b35a2.firebaseapp.com",
  projectId: "realtor-clone-react-b35a2",
  storageBucket: "realtor-clone-react-b35a2.appspot.com",
  messagingSenderId: "542887314563",
  appId: "1:542887314563:web:83ed48c93257e4458247b6",
  measurementId: "G-0118NP21P9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore()