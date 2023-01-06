import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth, db } from '@firebaseApp';
import { addDoc, collection } from '@firebase/firestore';
import { CreateUser } from '@types';

export const singUpWithEmailAndPassword = async (name: CreateUser, password: string) => {
  const res = await createUserWithEmailAndPassword(auth, name.email, password);
  const user = res.user;
  await addDoc(collection(db, 'users'), {
    uid: user.uid,
    ...name,
    authProvider: 'local'
  });
  return res;
};
