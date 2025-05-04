import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  Timestamp
} from 'firebase/firestore';
import { db } from './firebaseConfig';
import { getCurrentUser } from './auth';

export const saveUserProfile = async (data: {
  profilePhoto?: string;
  name?: string;
  email?: string;
  updatedAt?: Date;
}) => {
  try {
    const user = getCurrentUser();
    if (!user) throw new Error('Kullanıcı bulunamadı');

    await setDoc(doc(db, 'users', user.uid), {
      ...data,
      updatedAt: new Date()
    }, { merge: true });

    return true;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getUserProfile = async () => {
  try {
    const user = getCurrentUser();
    if (!user) throw new Error('Kullanıcı bulunamadı');

    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (userDoc.exists()) {
      return userDoc.data();
    }
    return null;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateUserProfile = async (data: {
  profilePhoto?: string;
  name?: string;
  email?: string;
}) => {
  try {
    const user = getCurrentUser();
    if (!user) throw new Error('Kullanıcı bulunamadı');

    await updateDoc(doc(db, 'users', user.uid), {
      ...data,
      updatedAt: new Date()
    });

    return true;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const savePhotoToTextureData = async (data: {
  photoUrl: string;
  title: string;
  userId: string;
}) => {
  try {
    const textureDataRef = collection(db, 'TextureData');
    const newDocRef = doc(textureDataRef);
    
    await setDoc(newDocRef, {
      ...data,
      uploadDate: Timestamp.now(),
      likes: 0,
      comments: []
    });

    return newDocRef.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getUserPhotos = async () => {
  try {
    const user = getCurrentUser();
    if (!user) throw new Error('Kullanıcı bulunamadı');

    const textureDataRef = collection(db, 'TextureData');
    const q = query(textureDataRef, where('userId', '==', user.uid));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getAllPhotos = async () => {
  try {
    const textureDataRef = collection(db, 'TextureData');
    const querySnapshot = await getDocs(textureDataRef);

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error: any) {
    throw new Error(error.message);
  }
}; 