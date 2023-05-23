import db from '../config/database.js';

async function showUserData(id) {
  const { rows } = await db.query(`
  SELECT
    urls."userId" AS id,
    users.name,
    SUM(urls."viewsCount")::integer AS "visitCount",
    JSON_AGG(JSON_BUILD_OBJECT('id', urls.id, 'shortUrl', urls."shortUrl", 'url', urls.url, 'visitCount', urls."viewsCount"))
  FROM urls
  JOIN users ON urls."userId" = users.id
  WHERE urls."userId" = $1
  GROUP BY urls."userId", users.name;
  `, [id]);
  return rows[0];
}

export default { showUserData };
