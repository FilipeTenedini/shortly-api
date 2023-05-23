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
    res.status(500).send(err.message);
  }
}

async function index(req, res) {
  const { id } = res.locals.params;
  try {
    const shortedItem = await urlRepository.findById(id);
    if (!shortedItem) res.status(404).send('Item not found');

    res.status(200).send(shortedItem);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function redirect(req, res) {
  const { shortUrl } = res.locals.params;

  try {
    const { url } = await urlRepository.findByShortUrl(shortUrl);
    if (!url) return res.status(404).send('Url not found');

    const updateUrlViews = await urlRepository.update(shortUrl);
    if (!updateUrlViews) return res.status(500).send('Fail to update');

    res.redirect(url);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function deleteUrl(req, res) {
  const { id } = res.locals.params;
  const { user } = res.locals;

  try {
    const shortUrl = await urlRepository.findById(id);
    if (!shortUrl) return res.status(404).send('Short URL not found.');

    const deletedShortUrl = await urlRepository.deleteUrl(id, user.id);

    if (!deletedShortUrl) return res.status(401).send('The shortened URL does not belong to this user.');

    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export default {
  createShortUrl, index, redirect, deleteUrl,
};
