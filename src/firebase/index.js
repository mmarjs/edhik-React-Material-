/**
 * Firebase Data
 * embryo comes with built in firebase database features
 * You Need To Add Your Firsebase App Account Details Here
 */
import firebase from "firebase/app";
import "firebase/database";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAYuUYRLDDaaaARNtGdOCuuONA_N8b9t4s",
  authDomain: "embryo-37c6d.firebaseapp.com",
  databaseURL: "https://embryo-37c6d.firebaseio.com",
  projectId: "embryo-37c6d",
  storageBucket: "embryo-37c6d.appspot.com",
  messagingSenderId: "144742774148"
};

// var config = {
//   apiKey: "AIzaSyAYuUYRLDDaaaARNtGdOCuuONA_N8b9t4s",
//   authDomain: "embryo-37c6d.firebaseapp.com",
//   databaseURL: "https://embryo-37c6d.firebaseio.com",
//   projectId: "embryo-37c6d",
//   storageBucket: "embryo-37c6d.appspot.com",
//   messagingSenderId: "144742774148"
// };

firebase.initializeApp(config);

export default firebase;
