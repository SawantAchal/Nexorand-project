import express from 'express';
import { login, signup } from '../controllers/userController.js';

const userRouter = express.Router();

// Route to register a new user. 
userRouter.post('/signup', signup);

// Route to log in an existing user. 
userRouter.post('/login', login);

export default userRouter;
