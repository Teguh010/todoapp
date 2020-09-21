
import * as firebase from 'firebase';

    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAXyRjhw1JoSTPtTDsJDqmoTpGbv1VOIWw",
    authDomain: "mytodoapp-d17ac.firebaseapp.com",
    databaseURL: "https://mytodoapp-d17ac.firebaseio.com",
    projectId: "mytodoapp-d17ac",
    storageBucket: "mytodoapp-d17ac.appspot.com",
    messagingSenderId: "1012329524077",
    appId: "1:1012329524077:web:5746b578f9d30a97c38864"
  };

// const db = firebase.firestore()
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
