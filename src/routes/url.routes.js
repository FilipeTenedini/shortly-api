import { Router } from 'express';
import urlController from '../controllers/url.controller.js';
import validateBody from '../middlewares/validateBody.middleware.js';
import validToken from '../middlewares/validToken.js';
import urlchema from '../schemas/url.schema.js';

const urlRouter = Router();

urlRouter.post('/shorten', validateBody(urlchema), validToken, urlController.createShortUrl);

export default urlRouter;
