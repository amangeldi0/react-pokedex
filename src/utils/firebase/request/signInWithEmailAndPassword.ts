import { auth } from '@firebaseApp';
import { signInWithEmailAndPassword as SingUp } from '@firebase/auth';

export const signInWithEmailAndPassword = async (email: string, password: string) => {
  return await SingUp(auth, email, password);
};
