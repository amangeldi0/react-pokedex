import { maxLength, minLength, required } from '../rule';

export const passwordSchema = {
    required,
    minLength: minLength(7),
    maxLength: maxLength(15)
};