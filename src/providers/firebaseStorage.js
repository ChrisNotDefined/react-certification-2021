import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { firestorage } from './firebaseConfig';

const generateFileName = (imageFile, name) => {
  if (!name) return imageFile.name;
  const extension = imageFile.name.split('.').slice(-1)[0];
  return `${name}.${extension}`;
};

export const uploadImage = async (imageFile, name) => {
  if (!imageFile) throw new Error('No image provided');

  const fileName = generateFileName(imageFile, name);

  const storageRef = ref(firestorage, `images/${fileName}`);
  const uploadResult = await uploadBytes(storageRef, imageFile);
  if (!uploadResult) throw new Error('The file could not be loaded');
  const url = await getDownloadURL(storageRef);
  return url;
};

export const getImageUrl = async (locationStr) => {
  const storageRef = ref(firestorage, locationStr);
  const url = await getDownloadURL(storageRef);
  return url;
};
