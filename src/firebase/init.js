
import * as firebase from 'firebase';

    // Your web app's Firebase configuration
  var firebaseConfig = {
   apiKey: "YOURAPIKEY",
  authDomain: "YOURAUTHDOMAIN",
  databaseURL: "YOURDATABASEURL",
  projectId: "YOURPROJECTID",
  storageBucket: "YOURSTORAGEBUCKET",
  messagingSenderId: "YOURMESSAGINGSENDERID",
  appId: "YOURAPPID"
  };

// const db = firebase.firestore()
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
