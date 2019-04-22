import firebase from 'firebase'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDSxKIfSVPa-r2Vo2C3Mlq7YX_s6I29vOs",
  authDomain: "samplefirebase-af9fc.firebaseapp.com",
  databaseURL: "https://samplefirebase-af9fc.firebaseio.com",
  projectId: "samplefirebase-af9fc",
  storageBucket: "samplefirebase-af9fc.appspot.com",
  messagingSenderId: "181483037658"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()