import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDqp-SCYaDVP_o0JQxPX_VRw5XHdbPE6_I",
  authDomain: "bus-counterbd.firebaseapp.com",
  projectId: "bus-counterbd",
  storageBucket: "bus-counterbd.appspot.com",
  messagingSenderId: "829992095636",
  appId: "1:829992095636:web:dd510a5843e92bc11b4981"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase;