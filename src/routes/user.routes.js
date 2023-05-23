import { Router } from 'express';
import userController from '../controllers/user.controller.js';
import validToken from '../middlewares/validToken.js';

const userRouter = Router();

userRouter.get('/me', validToken, userController.showUserData);

export default userRouter;
