import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNbaTzBmjGiD_wSJVVV_QhZJ2Ar6Wu5fw",
  authDomain: "authorization-money-control.firebaseapp.com",
  projectId: "authorization-money-control",
  storageBucket: "authorization-money-control.appspot.com",
  messagingSenderId: "1040291538606",
  appId: "1:1040291538606:web:094f1d8e9061ee9c01ef3f"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
} else{
  app = firebase.app()
}

const auth = firebase.auth();

export { auth };