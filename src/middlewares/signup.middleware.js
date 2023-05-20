import authSchema from '../schemas/auth.schema.js';
import authRepository from '../repositories/auth.repository.js';

async function validateSignUpData(req, res, next) {
  const {
    name, email, password, confirmPassword,
  } = req.body;

  const { error, value } = authSchema.signUpSchema.validate({
    name, email, password, confirmPassword,
  }, { abortEarly: false });

  if (error) return res.status(422).send(error.details.map((detail) => detail.message));

  const existentUser = await authRepository.findByEmail(value.email);

  if (existentUser) return res.status(409).send('User already exists.');

  const user = {
    name: value.name,
    email: value.email,
    password: value.password,
  };

  res.locals.data = user;

  next();
}

export default validateSignUpData;
