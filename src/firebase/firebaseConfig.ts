import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB4f95rFd9Z7csR7B7JPzuELMz7VMTnvnc',
  authDomain: 'textureproject-efb85.firebaseapp.com',
  projectId: 'textureproject-efb85',
  storageBucket: 'textureproject-efb85.appspot.com', 
  messagingSenderId: '309250848302',
  appId: '1:309250848302:web:80183ed20f56a53b02d1bf',
  measurementId: 'G-2HF0YJZ3NH'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth, app };
