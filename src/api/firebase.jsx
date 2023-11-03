import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXRoZrWAwxMz5VcSfzqmsjydFMRgQAK48",
  authDomain: "kh-mini-project-d7d3d.firebaseapp.com",
  projectId: "kh-mini-project-d7d3d",
  storageBucket: "kh-mini-project-d7d3d.appspot.com",
  messagingSenderId: "169087865278",
  appId: "1:169087865278:web:aa0f4c08d8205d7fe429ef",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
