import db from '../config/database.js';

async function create(userId, url, shortedUrl, createdAt) {
  const { rows } = await db.query(`
  INSERT INTO urls ("userId", url, "shortUrl", "createdAt")
  VALUES ($1, $2, $3, $4)
  RETURNING id, "shortUrl";
  `, [userId, url, shortedUrl, createdAt]);

  return rows[0];
}

async function findById(id) {
  const { rows } = await db.query(`
    SELECT id, "shortUrl", url
    FROM urls
    WHERE id = $1
  ;`, [id]);
  return rows[0];
}

async function findByShortUrl(shortUrl) {
  const { rows } = await db.query(`
    SELECT url
    FROM urls
    WHERE "shortUrl" = $1
  ;`, [shortUrl]);
  return rows[0];
}

async function update(shortUrl) {
  const { rowCount } = await db.query(`
    UPDATE urls
    SET "viewsCount" = "viewsCount" + 1
    WHERE "shortUrl" = $1
  ;`, [shortUrl]);

  return rowCount;
}

async function deleteUrl(id, userId) {
  const { rowCount } = db.query(`
    DELETE
    FROM urls
    WHERE id = $1
    AND "userId" = $2;
    `, [id, userId]);

  return rowCount;
}

export default {
  create, findById, findByShortUrl, update, deleteUrl,
};
