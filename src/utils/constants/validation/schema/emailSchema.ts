import { maxLength, minLength, patterEmail, required } from '../rule';

export const emailSchema = {
    required,
    minLength: minLength(2),
    maxLength: maxLength(25),
    pattern: patterEmail
};