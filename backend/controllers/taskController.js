import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import asyncHandler from 'express-async-handler'
import Task from '../model/taskModel.js'


// @Desc - Get User Data
// @Route - GET /api/user/profile
// @Access - Private
export const getTask = asyncHandler(async (req, res) => {
    // const { _id, username, email } = await Task.findById(req.user.id)
    res.json("getting the task done")

})


export const setTask = asyncHandler(async (req, res) => {
    // const { _id, username, email } = await Task.findById(req.user.id)
    res.json("Creating the task")

})


export const updateTask = asyncHandler(async (req, res) => {
    // const { _id, username, email } = await Task.findById(req.user.id)
    res.json("Updating the task...")

})