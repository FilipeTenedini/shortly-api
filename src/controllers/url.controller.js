import { nanoid } from 'nanoid';
import urlRepository from '../repositories/url.repository.js';

async function createShortUrl(req, res) {
  const { user } = res.locals;
  const { url } = res.locals.body;
  const { id } = user;
  const createdAt = new Date();

  try {
    const shortedUrl = nanoid(10);
    const insertedUrl = await urlRepository.create(id, url, shortedUrl, createdAt);

    res.status(201).send({ id: insertedUrl.id, shortUrl: insertedUrl.shortUrl });
  } catch (err) {
    console.log(err);
  }
}

export default { createShortUrl };
