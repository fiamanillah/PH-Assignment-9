// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyD_zSSDfTKkYI47518pOzH8_UDG_u0mymU',
    authDomain: 'ph-assignment-9-97832.firebaseapp.com',
    projectId: 'ph-assignment-9-97832',
    storageBucket: 'ph-assignment-9-97832.firebasestorage.app',
    messagingSenderId: '151435331863',
    appId: '1:151435331863:web:1e996bee8baa705dcf8f52',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
