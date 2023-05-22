import { Router } from 'express';
import authController from '../controllers/auth.controller.js';
import validateSignUpData from '../middlewares/signup.middleware.js';
import validateBody from '../middlewares/validateBody.middleware.js';
import authSchema from '../schemas/auth.schema.js';

const authRouter = Router();

authRouter.post('/signup', validateSignUpData, authController.create);

authRouter.post('/signin', validateBody(authSchema.signInSchema), authController.signin);

export default authRouter;
