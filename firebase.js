import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {
  getDatabase, // allows to get database from firebase
  ref, // give us a spefic refrence in uor database
  push, // creates a new location in a given refrence
  set, // it add data to database
  onValue, // reads ata from database
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

// Your web app's Firebase configuration
// ENTER FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyA6yX8i3uwnRCbzz03QpeuqBgSF3dz7iS8",
  authDomain: "fir-f4909.firebaseapp.com",
  projectId: "fir-f4909",
  storageBucket: "fir-f4909.appspot.com",
  messagingSenderId: "821998454193",
  appId: "1:821998454193:web:67686cc4c5af677f756990",
  measurementId: "G-B58743P64R"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database, ref, push, set, onValue };
