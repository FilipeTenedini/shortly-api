import joi from 'joi';

const signUpSchema = joi.object({
  name: joi
    .string()
    .pattern(/^[a-zA-Z\s]+$/)
    .required()
    .messages({
      'string.pattern.base': 'The Name field only accepts letters and spaces',
    }),
  email: joi
    .string()
    .email()
    .required(),
  password: joi
    .string()
    .alphanum()
    .required(),
  confirmPassword: joi
    .string()
    .alphanum()
    .valid(joi.ref('password'))
    .required()
    .messages({
      'any.only': 'The Confirm Password field must be equal to the Password field',
    }),
});

const signInSchema = joi.object({
  email: joi
    .string()
    .email()
    .required(),
  password: joi
    .string()
    .alphanum()
    .required(),
});

export default { signUpSchema, signInSchema };
