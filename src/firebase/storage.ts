import { 
  ref, 
  uploadBytes, 
  getDownloadURL,
  deleteObject
} from 'firebase/storage';
import { storage } from './firebaseConfig';
import { getCurrentUser } from './auth';

export const uploadProfilePhoto = async (uri: string) => {
  try {
    const user = getCurrentUser();
    if (!user) throw new Error('Kullanıcı bulunamadı');

    const response = await fetch(uri);
    const blob = await response.blob();
    
    const filename = `profile_photos/${user.uid}_${Date.now()}.jpg`;
    const storageRef = ref(storage, filename);
    
    await uploadBytes(storageRef, blob);
    const downloadURL = await getDownloadURL(storageRef);
    
    return downloadURL;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteProfilePhoto = async (photoUrl: string) => {
  try {
    const photoRef = ref(storage, photoUrl);
    await deleteObject(photoRef);
    return true;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const uploadTexturePhoto = async (uri: string) => {
  try {
    const user = getCurrentUser();
    if (!user) throw new Error('Kullanıcı bulunamadı');

    const response = await fetch(uri);
    const blob = await response.blob();
    
    const filename = `texture_photos/${user.uid}_${Date.now()}.jpg`;
    const storageRef = ref(storage, filename);
    
    await uploadBytes(storageRef, blob);
    const downloadURL = await getDownloadURL(storageRef);
    
    return downloadURL;
  } catch (error: any) {
    throw new Error(error.message);
  }
}; 