import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp6iVmDK9fP28rTRlMGAefT-xTP6rSxE0",
  authDomain: "pokemon-app-grm.firebaseapp.com",
  projectId: "pokemon-app-grm",
  storageBucket: "pokemon-app-grm.appspot.com",
  messagingSenderId: "489972604267",
  appId: "1:489972604267:web:a7ba99348ce871d3a4c02e",
  measurementId: "G-5NE8R3FKSQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.performance()

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

export default db;
