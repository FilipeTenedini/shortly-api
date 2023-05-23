import { Router } from 'express';
import userController from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.get('/me', userController.showUserData);

export default userRouter;
