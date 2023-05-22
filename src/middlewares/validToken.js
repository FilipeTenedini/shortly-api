import jwt from 'jsonwebtoken';
import 'dotenv/config';

function validToken(req, res, next) {
  const { authorization } = req.headers;

  const [tokenType, token] = authorization.split(' ');

  if (!tokenType || tokenType !== 'Bearer' || !token) return res.status(401).send('User unauthenticated.');

  try {
    const validUser = jwt.verify(token, process.env.JWT_SECRET);
    res.locals.user = validUser;
    next();
  } catch (err) {
    res.status(401).send('User unauthenticated.');
  }
}

export default validToken;
