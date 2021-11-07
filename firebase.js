var firebaseConfig = {
  apiKey: "AIzaSyDNtFf_5ubvvly-rhrW9oDguQ08erbkF0g",
  authDomain: "clone-64f34.firebaseapp.com",
  projectId: "clone-64f34",
  storageBucket: "clone-64f34.appspot.com",
  messagingSenderId: "892208263845",
  appId: "1:892208263845:web:070c35a4546d4e4666d34c",
  measurementId: "G-1E6JEJ55SX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();
