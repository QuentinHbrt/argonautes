// Firebase config: code récupérer depuis le site de firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBodHaghrCtmmh7XDKXoiADVGPH3m2B5h0",
  authDomain: "argonaute-49349.firebaseapp.com",
  projectId: "argonaute-49349",
  storageBucket: "argonaute-49349.appspot.com",
  messagingSenderId: "229727054252",
  appId: "1:229727054252:web:959d6736ed2d00c6387209",
  measurementId: "G-GX2NTTHQN4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
