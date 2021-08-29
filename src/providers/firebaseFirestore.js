import {
  deleteField,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { fireStore } from './firebaseConfig';

export const listenToFavorites = (userId, onSnap) => {
  const favRef = doc(fireStore, 'favorites', userId);
  const unSub = onSnapshot(favRef, (docSnap) => {
    onSnap(docSnap.data());
  });
  return unSub;
};

export const addToFavorites = async (video, userId) => {
  const id = video.id.videoId || video.id;

  const favRef = doc(fireStore, 'favorites', userId);
  const docSnap = await getDoc(favRef);

  if (docSnap.exists()) {
    await updateDoc(favRef, {
      [id]: video,
    });
    return;
  }

  await setDoc(favRef, { [id]: video });
};

export const deleteFromFavorites = async (videoID, userId) => {
  const favRef = doc(fireStore, 'favorites', userId);

  await updateDoc(favRef, {
    [videoID]: deleteField(),
  });
};
