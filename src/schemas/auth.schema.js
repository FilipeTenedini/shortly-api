import joi from 'joi';
import sanitizeEntrance from './sanitizeEntrance.js';

const signUpSchema = joi.object({
  name: joi
    .string()
    .required()
    .custom(sanitizeEntrance)
    .messages({
      'string.pattern.base': 'The Name field only accepts letters and spaces',
    }),
  email: joi
    .string()
    .email()
    .custom(sanitizeEntrance)
    .required(),
  password: joi
    .string()
    .custom(sanitizeEntrance)
    .required(),
  confirmPassword: joi
    .string()
    .valid(joi.ref('password'))
    .custom(sanitizeEntrance)
    .required()
    .messages({
      'any.only': 'The Confirm Password field must be equal to the Password field',
    }),
});

const signInSchema = joi.object({
  email: joi
    .string()
    .email()
    .custom(sanitizeEntrance)
    .required(),
  password: joi
    .string()
    .alphanum()
    .custom(sanitizeEntrance)
    .required(),
});

export default { signUpSchema, signInSchema };
