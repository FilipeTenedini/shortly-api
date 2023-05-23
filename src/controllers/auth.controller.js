import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import authRepository from '../repositories/auth.repository.js';

dotenv.config();

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
  const { email, password } = res.locals.body;
  try {
    const user = await authRepository.findByEmail(email);
    if (!user) return res.status(401).send('Invalid email');

    const authUser = await bcrypt.compare(password, user.password);
    if (!authUser) return res.status(401).send('Incorrect email or password');

    const data = { id: user.id, name: user.name, email: user.email };
    const config = { expiresIn: 60 * 60 * 24 * 30 };
    const key = process.env.JWT_SECRET || 'uma_chave_publica';
    const token = jwt.sign(data, key, config);

    res.status(200).send({ token });
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export default { create, signin };
