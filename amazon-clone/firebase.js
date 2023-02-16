import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDdHkFHriyX6QvPhnHhEOUZOfRZc0zV-r0',
  authDomain: 'clone-6c14e.firebaseapp.com',
  projectId: 'clone-6c14e',
  storageBucket: 'clone-6c14e.appspot.com',
  messagingSenderId: '998092659730',
  appId: '1:998092659730:web:b9ebfbcac4c84bf18bcccb',
};

// const app = initializeApp(firebaseConfig);
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = getFirestore(app);

export default db;
