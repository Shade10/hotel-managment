import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";


var config = {
    apiKey: "AIzaSyCyrESV2X17o7xAnjhALo_N0d9tgd4Za2Q",
    authDomain: "hotel-managment-4e09d.firebaseapp.com",
    databaseURL: "https://hotel-managment-4e09d.firebaseio.com",
    projectId: "hotel-managment-4e09d",
    storageBucket: "hotel-managment-4e09d.appspot.com",
    messagingSenderId: "138097369394"
  };
  firebase.initializeApp(config);

  export const rootRef = firebase.database().ref();