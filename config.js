import * as firebase from 'firebase'
require ('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCLgIHiWjig158aRt8SprsZLdUApnuyzRw",
    authDomain: "shoolapptryingtofix.firebaseapp.com",
    projectId: "shoolapptryingtofix",
    storageBucket: "shoolapptryingtofix.appspot.com",
    messagingSenderId: "717336858251",
    appId: "1:717336858251:web:93821b738742834042ce8e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()