import { doc, setDoc } from 'firebase/firestore';

import { db } from '~/configs/database';

export const addForm = async (form: any) => {
  const formCollect = doc(db, 'forms', form.so);
  try {
    await setDoc(formCollect, form);
  } catch (error) {
    console.error(error);
  }
};
