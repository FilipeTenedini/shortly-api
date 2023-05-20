import { Router } from 'express';
import authController from '../controllers/auth.controller.js';
import validateSignUpData from '../middlewares/signup.middleware.js';

const authRouter = Router();

authRouter.post('/signup', validateSignUpData, authController.create);

export default authRouter;
