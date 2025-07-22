import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCJffWnxVXVbSnhAdkq2TCG72LoQuDj2BY",
  authDomain: "calcoders-2f7ae.firebaseapp.com",
  projectId: "calcoders-2f7ae",
  storageBucket: "calcoders-2f7ae.appspot.com",
  messagingSenderId: "710382351280",
  appId: "1:710382351280:web:e46af311f329b7e7b95c75",
  measurementId: "G-QDNXX4JF0Y"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export default app;
