import { useMutation } from '@tanstack/react-query';
import { RequestMutationSettings, UseRegisterWithEmailAndPasswordMutationParams } from '@types';
import { singUpWithEmailAndPassword } from '@firebaseApp';

export const useRegisterWithEmailAndPasswordMutation = (
  settings?: RequestMutationSettings<typeof singUpWithEmailAndPassword>
) =>
  useMutation(
    ['registerWithEmailAndPassword'],
    async (params: UseRegisterWithEmailAndPasswordMutationParams) =>
      await singUpWithEmailAndPassword(params.user, params.password),
    settings?.options && settings.options
  );
