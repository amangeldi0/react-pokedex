import { useMutation } from '@tanstack/react-query';
import { signInWithEmailAndPassword, singUpWithEmailAndPassword } from '@firebaseApp';
import {
  RequestMutationSettings,
  useLogInWithEmailAndPasswordMutationParams as Params
} from '@types';

export const useLogInWithEmailAndPasswordMutation = (
  settings?: RequestMutationSettings<typeof singUpWithEmailAndPassword>
) =>
  useMutation(
    ['singIn'],
    async (params: Params) => await signInWithEmailAndPassword(params.email, params.password),
    settings?.options && settings.options
  );
