import *as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA9hrwSXAhnoTi_la_Wh4g_GiaGV2iEOHQ",
    authDomain: "photo-gallery-001.firebaseapp.com",
    databaseURL: "https://photo-gallery-001.firebaseio.com",
    projectId: "photo-gallery-001",
    storageBucket: "photo-gallery-001.appspot.com",
    messagingSenderId: "850898746768",
    appId: "1:850898746768:web:ea8b481e27da18b4c58715",
    measurementId: "G-NP53WYE7E7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Services
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };