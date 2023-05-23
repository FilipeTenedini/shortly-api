import db from '../config/database.js';

async function showUserData(id) {
  const { rows } = await db.query(`
  SELECT
    urls."userId" AS id,
    users.name,
    SUM(urls."viewsCount")::integer AS "visitCount",
    JSON_AGG(urls.*) as "shortenedUrls"
  FROM urls
  JOIN users ON urls."userId" = users.id
  WHERE urls."userId" = $1
  GROUP BY urls."userId", users.name;

  ;`, [id]);
  return rows[0];
}

export default { showUserData };
