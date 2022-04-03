// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjphcv78rAqOEmbl7xfJWGFgE3e2WdSh8",
  authDomain: "coral-reef-b579b.firebaseapp.com",
  projectId: "coral-reef-b579b",
  storageBucket: "coral-reef-b579b.appspot.com",
  messagingSenderId: "249558745970",
  appId: "1:249558745970:web:8aee5041dfab12a955d3eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };