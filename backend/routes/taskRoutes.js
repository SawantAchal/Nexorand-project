import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { addTask, getTaskByDay, getTasks, removeTask, updateTask } from '../controllers/taskController.js'

const taskRouter = express.Router()

taskRouter.post('/' , authMiddleware,addTask);
taskRouter.get('/get/:id' , authMiddleware , getTasks);
taskRouter.delete('/:id' , authMiddleware , removeTask);
taskRouter.put('/:id' , authMiddleware , updateTask);
taskRouter.get('/day/:day' , authMiddleware , getTaskByDay);

export default taskRouter;