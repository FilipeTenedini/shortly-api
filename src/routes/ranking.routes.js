import { Router } from 'express';
import rankingController from '../controllers/ranking.controller.js';

const rankingRouter = Router();

rankingRouter.get('/', rankingController.show);

export default rankingRouter;
