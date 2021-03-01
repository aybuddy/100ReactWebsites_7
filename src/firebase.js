import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDXebSmMxqlFJSUj_qKPF6lnMKCX4YIq24',
  authDomain: 'todo-app-react-cp-602cb.firebaseapp.com',
  projectId: 'todo-app-react-cp-602cb',
  storageBucket: 'todo-app-react-cp-602cb.appspot.com',
  messagingSenderId: '141921294669',
  appId: '1:141921294669:web:9d9caeb0acb810665c3f04',
  measurementId: 'G-42446R2Z7E',
});

const db = firebaseApp.firestore();

export default db;
