import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getCurrentUser } from './auth';

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

// Initialize Firestore
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

export const uploadTexturePhoto = async (uri: string): Promise<string> => {
  try {
    const user = getCurrentUser();
    if (!user) throw new Error('Kullanıcı bulunamadı');

    // Android için: uri 'file://' ile başlıyorsa fetch çalışır, iOS için de genelde çalışır.
    const response = await fetch(uri);
    const blob = await response.blob();

    const filename = `texture_photos/${user.uid}_${Date.now()}.jpg`;
    const storageRef = ref(storage, filename);

    await uploadBytes(storageRef, blob);
    const downloadURL = await getDownloadURL(storageRef);

    return downloadURL;
  } catch (error: any) {
    // Hata detayını konsola yaz
    console.error('Firebase Storage upload error:', error);
    throw new Error(error.message || 'Fotoğraf yüklenirken bir hata oluştu.');
  }
};

export { auth, app, db, storage };
