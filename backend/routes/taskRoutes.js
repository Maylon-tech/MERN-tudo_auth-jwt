import express from 'express'
import { deleteTask, getTask, setTask, updateTask } from '../controllers/taskController.js'
import protect from '../middleware/authMiddleware.js'

const taskRouter = express.Router()
// import protect from '../middleware/authMiddleware.js'

taskRouter.get('/getTask', protect, getTask)

taskRouter.post('/setTask', protect, setTask)

taskRouter.put('/updateTask', updateTask)

taskRouter.delete('/remove', deleteTask)

export default taskRouter

