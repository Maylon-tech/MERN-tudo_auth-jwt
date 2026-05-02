import asyncHandler from 'express-async-handler'
import Task from '../model/taskModel.js'
import User from '../model/userModel.js'

// @Desc - Get User Data
// @Route - GET /api/user/profile
// @Access - Private
export const getTask = asyncHandler(async (req, res) => {
    const tasks = await Task.find({ user: req.user.id })

    // const task = await Task.find({
    //     title: req.task.id,
    //     category: req.task.category,
    //     description: req.task.description,
    // })

    // const task = {
    //     title,
    //     category,
    //     description,
    // }
    res.status(200).json(tasks)
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

    const user = await User.findById(req.user.id)

    const task = await Task.create({
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        username: req.user.id
    })

    res.status(201).json(task)
})

// @Desc - Update Task
// @Route - PUT /api/tasks/:id
// @Access - Private
export const updateTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)
    // Check for user
    if (!task) {
        res.status(401)
        throw new Error("User not found.!")
    }

    // Make sure the logged in user matched the task data
    const user = await User.findById(req.user.id)
    // Check for USer
    if (!user) {
        res.status(401)
        throw new Error("User not found.")
    }
    // Make sure the logged in user matches the goal user
    if (task.user.toString() !== user.id) {
        res.status(401)
        throw new Error("User not authorized.")
    }

    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updateTask)
})

// @Desc - Delete Task
// @Route - DELETE /api/tasks/:id
// @Access - Private
export const deleteTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if (!task) {
        res.status(401)
        throw new Error("Task not found.!")
    }

    // Make sure the logged in user matched the task data
    const user = await User.findById(req.user.id)
    // Check for USer
    if (!user) {
        res.status(401)
        throw new Error("User not found.")
    }
    // Make sure the logged in user matches the goal user
    if (task.user.toString() !== user.id) {
        res.status(401)
        throw new Error("User not authorized.")
    }

    await task.remove()
    res.status(200).json({ id: req.params.id })

})