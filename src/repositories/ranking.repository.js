import db from '../config/database.js';

async function list() {
  const { rows } = await db.query(`
  SELECT
    us.id,
    us.name,
    COUNT(u."userId")::integer AS "linksCount",
    SUM(u."viewsCount")::integer AS "visitCount"
  FROM urls u
  RIGHT JOIN users us
  ON u."userId" = us.id
  GROUP BY us.id, us.name
  ORDER BY "visitCount" DESC NULLS LAST
  LIMIT 10;
  `);

  return rows;
}
export default { list };
