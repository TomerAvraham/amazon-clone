import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAnn3Ifm5Hd9E90Y6T247g0tVafNLJND3U",
  authDomain: "clone-d4cf7.firebaseapp.com",
  databaseURL: "https://clone-d4cf7.firebaseio.com",
  projectId: "clone-d4cf7",
  storageBucket: "clone-d4cf7.appspot.com",
  messagingSenderId: "76557675265",
  appId: "1:76557675265:web:a6cdbd50fe98b4a0034900",
  measurementId: "G-8RH7R4YE8B"
})

const auth = firebase.auth();

export { auth }