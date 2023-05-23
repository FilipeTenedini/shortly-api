import { Router } from 'express';
import urlController from '../controllers/url.controller.js';
import validateBody from '../middlewares/validateBody.middleware.js';
import validateParams from '../middlewares/validateParam.middleware.js';
import validToken from '../middlewares/validToken.js';
import idParam from '../schemas/idParam.schema.js';
import urlSchema from '../schemas/url.schema.js';
import shortUrlParam from '../schemas/shortUrlParam.js';

const urlRouter = Router();

urlRouter.post('/shorten', validToken, validateBody(urlSchema), urlController.createShortUrl);

urlRouter.get('/:id', validateParams(idParam), urlController.index);

urlRouter.get('/open/:shortUrl', validateParams(shortUrlParam), urlController.redirect);

urlRouter.delete('/:id', validToken, validateParams(idParam), urlController.deleteUrl);

export default urlRouter;
