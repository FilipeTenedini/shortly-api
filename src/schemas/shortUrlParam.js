import joi from 'joi';
import sanitizeEntrance from './sanitizeEntrance.js';

const shortUrlParam = joi.object({
  shortUrl: joi
    .string()
    .custom(sanitizeEntrance)
    .required(),
});

export default shortUrlParam;
