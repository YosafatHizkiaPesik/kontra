// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkMT8Ot_kMjhFrCSOEmKBI2hta615OXhM",
    authDomain: "kontra-365003.firebaseapp.com",
    projectId: "kontra-365003",
    storageBucket: "kontra-365003.appspot.com",
    messagingSenderId: "482455386803",
    appId: "1:482455386803:web:05717ea39b657a93b88ec6"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();