import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Navigate } from 'react-router-dom';
import config from '~/configs';

import { auth, db } from '~/configs/database';

const provider = new GoogleAuthProvider();

export const login = () => signInWithPopup(auth, provider);

export const logout = async () => {
  await signOut(auth);
  <Navigate to={config.routes.home} />;
  localStorage.clear();
};

export const addUser = async (currentUser: any) => {
  const userCollect = doc(db, 'users', currentUser.uid);
  const data = {
    uid: currentUser.uid,
    displayName: currentUser.displayName,
    email: currentUser.email,
    photoURL: currentUser.photoURL,
  };
  try {
    await setDoc(userCollect, data);
  } catch (error) {
    console.error(error);
  }
};
