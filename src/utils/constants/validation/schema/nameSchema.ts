import { minLength, required } from '../rule';

export const nameSchema = {
    required,
    minLength: minLength(4)
};