// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOJ1JjqcWyxSa4tAEmZzGHEMk_47BtWZ8",
  authDomain: "notes-app-xd.firebaseapp.com",
  projectId: "notes-app-xd",
  storageBucket: "notes-app-xd.firebasestorage.app",
  messagingSenderId: "335310650662",
  appId: "1:335310650662:web:16f641666047ad4ce255e7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
