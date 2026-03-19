import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js'


// GET the profile data Info
export const getUser = asyncHandler(async (req, res) => {
    const user = await User.find()


    res.status(200).json(user)
})

// POST new data API request "register"
export const createUser = asyncHandler(async (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400)
        throw new Error("Please add a text field!")
    }

    const newUser = await User.create({
        email: req.body.email,
        password: req.body.password
    })
    res.status(200).json(newUser)
})

// PUT Update from DB a new Data overWritting 
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

// DELETE Remove Data throw API on DB
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