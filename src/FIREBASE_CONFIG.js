// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRSRvZa40f49r9GhcTqWHJOOUkS09hg5M",
  authDomain: "shanthaverigopalagowda-8aa2d.firebaseapp.com",
  databaseURL:
    "https://shanthaverigopalagowda-8aa2d-default-rtdb.firebaseio.com",
  projectId: "shanthaverigopalagowda-8aa2d",
  storageBucket: "shanthaverigopalagowda-8aa2d.appspot.com",
  messagingSenderId: "905421208104",
  appId: "1:905421208104:web:b4bd3d62430e9f294e931d",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { firebaseApp, firebaseConfig, auth };
export default db;
