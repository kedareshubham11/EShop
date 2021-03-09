import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyALzmHqQ99Tqbwi5CgBUqkDlE-x128Hseo",
  authDomain: "clone-45306.firebaseapp.com",
  databaseURL: "https://clone-45306.firebaseio.com",
  projectId: "clone-45306",
  storageBucket: "clone-45306.appspot.com",
  messagingSenderId: "611385549883",
  appId: "1:611385549883:web:d58fead0beab2bc7c6a81e",
  measurementId: "G-R8C5L7G6ZW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
