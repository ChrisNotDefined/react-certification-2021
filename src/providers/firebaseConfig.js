import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { FIREBASE_CONFIG } from '../keys/FirebaseConfig';

const firebaseConfig = FIREBASE_CONFIG;

export const firebaseApp = initializeApp(firebaseConfig);
export const firestorage = getStorage();
export const auth = getAuth();
