import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { addTask, getTaskByDay, getTasks, removeTask, updateTask } from '../controllers/taskController.js';

const taskRouter = express.Router();

// Route to add a new task. Requires authentication.
taskRouter.post('/', authMiddleware, addTask);

// Route to get all tasks for the logged-in user. Requires authentication.
taskRouter.get('/get/:id', authMiddleware, getTasks);

// Route to remove a task by ID. Requires authentication.
taskRouter.delete('/:id', authMiddleware, removeTask);

// Route to update a task by ID. Requires authentication.
taskRouter.put('/:id', authMiddleware, updateTask);

// Route to get tasks for a specific day. Requires authentication.
taskRouter.get('/day/:day', authMiddleware, getTaskByDay);

export default taskRouter;
