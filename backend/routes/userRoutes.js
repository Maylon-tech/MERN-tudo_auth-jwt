import express from 'express'
import { registerUser, loginUser, deleteUser, getUser, updateUser, getAllUsers } from '../controllers/userController.js'
const router = express.Router()
import protect from '../middleware/authMiddleware.js'


router.get('/getProfile', protect, getUser)

router.get('/allUsers', getAllUsers)

router.post('/login', loginUser)

router.post('/register', registerUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

export default router



