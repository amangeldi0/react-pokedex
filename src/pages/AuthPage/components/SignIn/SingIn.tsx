import React from 'react';
import { useForm } from 'react-hook-form';
import { AUTHProps, useLogInWithEmailAndPasswordMutationParams as Params } from '@types';
import { useLogInWithEmailAndPasswordMutation } from '@firebaseApp';
import bg from '../../../../assets/img/pokemon-party.jpg';
import {emailSchema, passwordSchema} from "@constants";

export const SingIn: React.FC<AUTHProps> = ({ setIsSignIN, isSingIn }) => {
  const { register, handleSubmit, formState } = useForm<Params>();

  const { mutate, isLoading: loading } = useLogInWithEmailAndPasswordMutation({});

  const isLoading = formState.isLoading || loading;

  return (
    <div className='auth__page'>
      <div className='form__content'>
        <form
          className='auth'
          onSubmit={handleSubmit(({ email, password }) => mutate({ email, password }))}
        >
          <div className='auth__title'>Welcome back</div>
          <div className="form__input">
            <input {...register('email', emailSchema)} placeholder='Email' />
            <span className='form__error'>{formState.errors.email?.message}</span>
          </div>
          <div className="form__input">
            <input {...register('password', passwordSchema)} type='password' placeholder='Password' />
            <span className='form__error'>{formState.errors.password?.message}</span>
          </div>
          <button type='submit' disabled={isLoading} className='auth__button'>
            Sing In
          </button>
          <button onClick={() => setIsSignIN(!isSingIn)} className='auth__button__acc'>
            {isSingIn ? 'Create new account' : 'Already have account'}
          </button>
        </form>
        <div className='bg__image'>
          <img src={bg} alt='bg__image' />
        </div>
      </div>
    </div>
  );
};
