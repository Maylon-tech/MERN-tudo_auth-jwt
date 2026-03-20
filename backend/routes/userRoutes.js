import express from 'express'
import { registerUser, loginUser, deleteUser, getUser, updateUser } from '../controllers/userController.js'
const router = express.Router()

// Buscar Dados do Usuario
router.get('/getProfile', getUser)

// Logar com credenciais existentes
router.post('/login', loginUser)

// Novo Registro do Usuario
router.post('/register', registerUser)

// Atualizar dodos do Usuario
router.put('/:id', updateUser)

// Remover Usuario
router.delete('/:id', deleteUser)

export default router