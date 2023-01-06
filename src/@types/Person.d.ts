export interface CreateUser {
  firstName: string;
  lastName: string;
  email: string;
}

export interface useLogInWithEmailAndPasswordMutationParams {
  email: string;
  password: string;
}

export interface ISingUp extends CreateUser {
  password: string;
}

export interface UseRegisterWithEmailAndPasswordMutationParams {
  user: CreateUser;
  password: string;
}
