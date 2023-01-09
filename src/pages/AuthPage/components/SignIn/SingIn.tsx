import React from 'react';
import { useForm } from 'react-hook-form';
import {
  AUTHProps,
  useLogInWithEmailAndPasswordMutationParams as Params
} from '@types';

import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from 'react-firebase-hooks/auth';

import { auth } from '@firebaseApp';

import { 
  emailSchema, 
  passwordSchema 
} from "@constants";

import bg from '../../../../assets/img/pokemon-party.jpg';
import google from '../../../../assets/icon/google.png';

export const SingIn: React.FC<AUTHProps> = ({ setIsSignIN, isSingIn }) => {
  const { register, handleSubmit, formState } = useForm<Params>({mode: "onBlur"});


  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleLoading, googleError] = useSignInWithGoogle(auth);


  const isLoading = formState.isLoading && loading;

  return (
    <div className='auth__page'>
      <div className='form__content'>
        <form
          className='auth'
          onSubmit={handleSubmit(({ email, password }) => signInWithEmailAndPassword(email, password))}
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
          <div className='google__button' onClick={() => signInWithGoogle()}>
            <img src={google} alt="google"/>
            Google
          </div>
        </form>

        <div className='bg__image'>
          <img src={bg} alt='bg__image' />
        </div>
      </div>
    </div>
  );
};
