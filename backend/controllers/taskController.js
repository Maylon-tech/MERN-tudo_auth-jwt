import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import asyncHandler from 'express-async-handler'
import Task from '../model/taskModel.js'


// @Desc - Get User Data
// @Route - GET /api/user/profile
// @Access - Private
export const getTask = asyncHandler(async (req, res) => {

    const  { title, category, description } = await Task.find({ task: req.task.title })

    const task = {
        title,
        category,
        description,
    }
    res.status(200).json({task, message: "done"})
})

// @Desc - Create Task
// @Route - POST /api/tasks/create
// @Access - Private
export const setTask = asyncHandler(async (req, res) => {
    const { title, category, description } = req.body
    // const { title, category, description } = await Task.find()
    
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

    // Check for user
    if (!user) {
        res.status(401)
        throw new Error("User not found.!")
    }
    // Make sure the logged in uyser matched the task data
 


    // const { _id, username, email } = await Task.findById(req.user.id)
    res.json("Updating the task...")

})