import firebase from 'firebase/app'
import 'firebase/firestore'

  const config = {
    apiKey: "AIzaSyCMNFjLajP5SvZquf9HKKAeV8-fh1rAQXE",
    authDomain: "my-site-85922.firebaseapp.com",
    databaseURL: "https://my-site-85922.firebaseio.com",
    projectId: "my-site-85922",
    storageBucket: "my-site-85922.appspot.com",
    messagingSenderId: "558568406979"
  };

  firebase.initializeApp(config);

  export const firestore = firebase.firestore()

  window.firebase = firebase

  export default firebase
