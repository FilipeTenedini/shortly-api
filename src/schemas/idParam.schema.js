import joi from 'joi';
import sanitizeEntrance from './sanitizeEntrance.js';

const idParam = joi.object({
  id: joi
    .string()
    .custom(sanitizeEntrance)
    .required(),
});

export default idParam;
