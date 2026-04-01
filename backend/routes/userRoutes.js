import express from 'express'
import { registerUser, loginUser, deleteUser, getUser, updateUser, getAllUsers } from '../controllers/userController.js'
const router = express.Router()
import protect from '../middleware/authMiddleware.js'


// Buscar Dados do Usuario
router.get('/getProfile', protect, getUser)

router.get('/allUsers', protect, getAllUsers)

// Logar com credenciais existentes
router.post('/login', loginUser)

// Novo Registro do Usuario
router.post('/register', registerUser)

// Atualizar dodos do Usuario
router.put('/:id', updateUser)

// Remover Usuario
router.delete('/:id', deleteUser)

export default router



