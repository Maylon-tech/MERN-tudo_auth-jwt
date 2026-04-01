import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js'


export const getAllUsers = asyncHandler(async (req, res) => {
    const allUsers = await User.find()
    // const { _id, username, email } = await User.findById(req.user.id)

    res.status(200).json(allUsers)
})

// @Desc - Get User Data
// @Route - GET /api/user/profile
// @Access - Private
export const getUser = asyncHandler(async (req, res) => {
    const { _id, username, email } = await User.findById(req.user.id)


    res.status(200).json({
        id: _id,
        username,
        email,
    })
})

// @Desc - Authenticate a user
// @Route - POST /api/user/login
// @Access - Public
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    // Check se Existe o Email
    const user = await User.findOne({ email })

    // Check for Password with bcrypt compare() Inputed & DB exist.
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid Credentials.")
    }
})

// @Desc - Create new User
// @Route - POST /api/user/register
// @Access - Public 
export const registerUser = asyncHandler(async (req, res) => {
    // Busca no corpo(formulario) da requisicao
    const { username, email, password } = req.body
    // Verifica se o dado foi inputado pelo ususario.
    if (!req.body.username || !req.body.email || !req.body.password) {
        res.status(400)
        throw new Error("Please add a text field!")
    }

    // Verifica se Ja Existe esse usuario inputado.
    const existUser = await User.findOne({ email })
    if (existUser) {
        res.status(400)
        throw new Error("user already exists..")
    }

    //Cryptografar Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Criar Usuario (de acordo com formulario) para modelar no Banco
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })
    // Verifica se foi criado com status 201 senao dara Erro.
    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid User Data..")
    }
})

// @Desc - Update a user info
// @Route - PUT /api/user/ID
// @Access - Public
export const updateUser = asyncHandler(async (req, res) => {
    // Busca o USER pelo ID para atualiza-lo
    const user = await User.findById(req.params.id)
    // Chekcar se existe mesmo
    if (!user) {
        res.status(400) 
        throw new Error("User Profile not Found..!!")
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedUser)
})

// @Desc - Remove user from DB
// @Route - DELETE /api/user/ID
// @Access - Public
export const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)    
    if (!user) {
        res.status(400) 
        throw new Error("User Profile not Found..!!")
    }

    const removeUser = await User.findByIdAndDelete(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(removeUser)
})  


// Generate JWT

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}