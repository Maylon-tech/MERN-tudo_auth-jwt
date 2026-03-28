import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import asyncHandler from 'express-async-handler'
import Task from '../model/taskModel.js'


// @Desc - Get User Data
// @Route - GET /api/user/profile
// @Access - Private
export const getTask = asyncHandler(async (req, res) => {

    const { title, category, description } = await Task.find()
    const task = {
        _id: req.task._id,
        title: req.task.title,
        category: req.task.category,
        description: req.task.description
    }
    res.status(200).json(task)
})

export const setTask = asyncHandler(async (req, res) => {
    const { title, category, description } = await Task.find()
    
    if (!req.body.title || !req.body.category || !req.body.description) {
        res.status(400)
        throw new Error("Please fill the input.")
    }

    const task = await Task.create({
        title,
        category,
        description
    })

    res.status(201).json({
        _id: task.id,
        title: task.title,
        category: task.category,
        description:task.description
    })

})


export const updateTask = asyncHandler(async (req, res) => {
    // const { _id, username, email } = await Task.findById(req.user.id)
    res.json("Updating the task...")

})