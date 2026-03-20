import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js'


// @Desc - Get User Data
// @Route - GET /api/user/profile
// @Access - Public
export const getUser = asyncHandler(async (req, res) => {
    const user = await User.find()


    res.status(200).json(user)
})

// @Desc - Authenticate a user
// @Route - POST /api/user/login
// @Access - Public
export const loginUser = asyncHandler(async (req, res) => {

    res.json("Login of User Credential.")

    if (!req.body.email || !req.body.password) {
        res.status(400)
        throw new Error("Please add a text field!")
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

    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email
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