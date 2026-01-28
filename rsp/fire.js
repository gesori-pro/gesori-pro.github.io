// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, set, onValue, update, get, child } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBSkizTO7o70NqUz90GLkYiwj9XGMKTCQU",
  authDomain: "rockscissorpaper-3b569.firebaseapp.com",
  projectId: "rockscissorpaper-3b569",
  storageBucket: "rockscissorpaper-3b569.firebasestorage.app",
  messagingSenderId: "55192953735",
  appId: "1:55192953735:web:ea13ca7b58500c8cc0a922",
  measurementId: "G-BY0VST5P46"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Export for game.js to use
export { db, ref, set, onValue, update, get, child };
