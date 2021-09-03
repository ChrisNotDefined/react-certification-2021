import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from './firebaseConfig';

export const registerUser = async ({ email, password, name }) => {
  await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(auth.currentUser, {
    displayName: name,
  });
  return auth.currentUser;
};

export const signUser = async (email, password) => {
  const credentials = await signInWithEmailAndPassword(auth, email, password);
  return credentials;
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const updateUser = async ({ name, photo }) => {
  const profile = {};
  if (name && name !== '') profile.displayName = name;
  if (photo && photo !== '') profile.photoURL = photo;

  await updateProfile(auth.currentUser, profile);
  return auth.currentUser;
};

export const listenToChanges = (listen = () => {}) => {
  return onAuthStateChanged(auth, listen);
};
