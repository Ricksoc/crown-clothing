import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdgPZOPS_4K96bM2yOEXkDb0ay1KHqjko",
  authDomain: "crwn-clothing-db-6ad20.firebaseapp.com",
  projectId: "crwn-clothing-db-6ad20",
  storageBucket: "crwn-clothing-db-6ad20.appspot.com",
  messagingSenderId: "784747675269",
  appId: "1:784747675269:web:a0385a0bd6d3522117b3ec",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
