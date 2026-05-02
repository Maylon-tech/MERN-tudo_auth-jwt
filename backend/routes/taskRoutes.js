import express from 'express'
import { deleteTask, getTask, setTask, updateTask } from '../controllers/taskController.js'
import protect from '../middleware/authMiddleware.js'

const taskRouter = express.Router()

taskRouter.get('/getTask', protect, getTask)

taskRouter.post('/setTask', protect, setTask)

taskRouter.put('/:id', protect, updateTask)

taskRouter.delete('/:id', protect, deleteTask)

export default taskRouter

