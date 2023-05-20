import db from '../config/database.js';

function create(name, email, password, createdAt) {
  return db.query(`
    INSERT INTO users(name, email, password, "createdAt")
    VALUES($1, $2, $3, $4);
    `, [name, email, password, createdAt]);
}

async function findByEmail(email) {
  const { rows } = await db.query(`
    SELECT *
    FROM users
    WHERE users.email = $1;
    `, [email]);

  const [row] = rows;
  return row;
}

export default {
  create, findByEmail,
};
