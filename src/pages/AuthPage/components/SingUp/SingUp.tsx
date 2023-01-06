import React from 'react';
import { useForm } from 'react-hook-form';
import { AUTHProps, ISingUp } from '@types';
import { useRegisterWithEmailAndPasswordMutation } from '@firebaseApp';
import { emailSchema, passwordSchema, nameSchema} from '@constants';
import bg from '../../../../assets/img/pokemon-party.jpg';

export const SingUp: React.FC<AUTHProps> = ({ isSingIn, setIsSignIN }) => {
  const { register, handleSubmit, formState } = useForm<ISingUp>({ mode: 'onChange' });

  const { mutate, isLoading: loading } = useRegisterWithEmailAndPasswordMutation({});

  const isLoading = formState.isLoading || loading;

  return (
    <div className='auth__page'>
      <div className='form__content'>
        <form
          className='auth'
          onSubmit={handleSubmit(({ password, ...user }) => mutate({ user, password }))}
        >
          <div className='auth__title'>Welcome</div>
          <div className="form__input">
            <input {...register('firstName', nameSchema)} placeholder='First name' />
            <span className='form__error'>{formState.errors.firstName?.message}</span>
          </div>
          <div className="form__input">
            <input {...register('lastName', nameSchema)} placeholder='Last name' />
            <span className='form__error'>{formState.errors.lastName?.message}</span>
          </div>
          <div className="form__input">
            <input {...register('email', emailSchema)} placeholder='Email' />
            <span className='form__error'>{formState.errors.email?.message}</span>
          </div>
          <div className="form__input">
            <input {...register('password', passwordSchema)} type='password' placeholder='Password' />
            <span className='form__error'>{formState.errors.password?.message}</span>
          </div>
          <button type='submit' disabled={isLoading} className='auth__button'>
            Sing Up
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
