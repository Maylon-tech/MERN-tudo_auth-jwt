import express from 'express'
import { getTask, setTask, updateTask } from '../controllers/taskController.js'

const taskRouter = express.Router()
// import protect from '../middleware/authMiddleware.js'


// Buscar Dados do Usuario
taskRouter.get('/getTask', getTask)

// Logar com credenciais existentes
taskRouter.post('/setTask', setTask)

// Novo Registro do Usuario
taskRouter.put('/updateTask', updateTask)

// // Atualizar dodos do Usuario
// taskRouter.put('/:id', updateUser)

// // Remover Usuario
// taskRouter.delete('/:id', deleteUser)

export default taskRouter

