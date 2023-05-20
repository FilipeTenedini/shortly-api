import bcrypt from 'bcrypt';
import authRepository from '../repositories/auth.repository.js';

async function create(req, res) {
  const { data } = res.locals;
  const { name, email, password } = data;
  const createdAt = new Date();
  const encryptedPass = bcrypt.hashSync(password, 10);

  try {
    const user = await authRepository.create(name, email, encryptedPass, createdAt);

    if (!user.rowCount) return res.status(500).send('Error creating user');

    return res.status(201).send('User created');
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function signin(req, res) {
  console.log(res.locals);
}
export default { create };
