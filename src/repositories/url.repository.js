import db from '../config/database.js';

async function create(userId, url, shortedUrl, createdAt) {
  const { rows } = await db.query(`
  INSERT INTO urls ("userId", url, "shortUrl", "createdAt")
  VALUES ($1, $2, $3, $4)
  RETURNING id, "shortUrl";
  `, [userId, url, shortedUrl, createdAt]);

  return rows[0];
}

export default { create };
