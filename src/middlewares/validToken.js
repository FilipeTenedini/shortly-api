import jwt from 'jsonwebtoken';
import 'dotenv/config';

function validToken(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).send('Invalid bearer format');

  const [tokenType, token] = authorization.split(' ');

  if (!tokenType || tokenType !== 'Bearer' || !token) return res.status(401).send('User unauthenticated.');

  const key = process.env.JWT_SECRET || 'uma_chave_publica';

  try {
    const validUser = jwt.verify(token, key);
    res.locals.user = validUser;
    next();
  } catch (err) {
    res.status(401).send('User unauthenticated.');
  }
}

export default validToken;
