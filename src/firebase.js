
import { getFirestore } from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwhUWme1hEWohS5tmEkb-zJyleAOgtAoo",
  authDomain: "bookcollection-6abfa.firebaseapp.com",
  projectId: "bookcollection-6abfa",
  storageBucket: "bookcollection-6abfa.appspot.com",
  messagingSenderId: "1090454406698",
  appId: "1:1090454406698:web:511a457a445411f4fca553",
  measurementId: "G-N6NEW9TXSP",
  databaseURL:"https://bookcollection-6abfa-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;