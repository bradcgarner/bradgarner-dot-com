import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';
import 'firebase/storage';

const config = {
  apiKey:            "AIzaSyDFgZ8y6QqDPSVfPllVSAi6rDwbELiCnSA",
  authDomain:        "urbanmeadow-944ec.firebaseapp.com",
  databaseURL:       "https://urbanmeadow-944ec.firebaseio.com",
  projectId:         "urbanmeadow-944ec",
  storageBucket:     "urbanmeadow-944ec.appspot.com",
  messagingSenderId: "151405445802",
  appId:             "1:151405445802:web:554a06f9b6703f0359c6d3",
  measurementId:     "G-8X6G66VKY9"
}; 
// ABOVE IS CORRECT FOR URBAN MEADOW
// BELOW IS COPIED FROM ANOTHER PROJECT (AND IS NEEDED)
// check below is so we do not attempt to initialize more than once
const fire = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app(); 

// LINE BELOW IS SUGGESTED BY FIREBASE NOW
// I DID NOT USE ANALYTICS IN THE PRIOR PROJECT
// NOT SURE IF WE WANT TO...
// firebase.analytics();

export default fire;