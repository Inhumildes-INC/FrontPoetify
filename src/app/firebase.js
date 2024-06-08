import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_TTLa0XcKZCQIzaZqBHjHxVGq8yf11pA",
  authDomain: "poetify-424503.firebaseapp.com",
  projectId: "poetify-424503",
  storageBucket: "poetify-424503.appspot.com",
  messagingSenderId: "607102699953",
  appId: "1:607102699953:web:3406b484f5b0159e5ed590"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };