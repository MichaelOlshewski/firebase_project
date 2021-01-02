import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: 'AIzaSyC0aO3bJRHBGOJdGHrse-KsKNpVuJq6N4U',
    authDomain: 'fir-project-f571e.firebaseapp.com',
    projectId: 'fir-project-f571e',
    storageBucket: 'fir-project-f571e.appspot.com',
    messagingSenderId: '926726429226',
    appId: '1:926726429226:web:1e2fdd3a49823723308153',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
