import joi from 'joi';
import sanitizeEntrance from './sanitizeEntrance.js';

const urlchema = joi.object({
  url: joi
    .string()
    .uri()
    .custom(sanitizeEntrance)
    .required(),
});

export default urlchema;
