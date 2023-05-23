import { Router } from 'express';
import authRouter from './auth.routes.js';
import urlRouter from './url.routes.js';
import userRouter from './user.routes.js';
import rankingRouter from './ranking.routes.js';

const router = Router();

router.use(authRouter);

router.use('/urls', urlRouter);

router.use('/users', userRouter);

router.use('/ranking', rankingRouter);

export default router;
