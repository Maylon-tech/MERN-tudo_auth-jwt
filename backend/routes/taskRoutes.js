import express from 'express'
import { getTask, setTask, updateTask } from '../controllers/taskController.js'

const taskRouter = express.Router()
// import protect from '../middleware/authMiddleware.js'

taskRouter.get('/getTask', getTask)

taskRouter.post('/setTask', setTask)

taskRouter.put('/updateTask', updateTask)

export default taskRouter

