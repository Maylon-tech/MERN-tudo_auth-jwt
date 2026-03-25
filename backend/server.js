import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'

import userRoutes from './routes/userRoutes.js'
import taskRoutes from './routes/taskRoutes.js'
import errorHandler from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
dotenv.config()

const PORT = process.env.PORT || 5000

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler)

app.use("/api/user", userRoutes)
app.use("/api/tasks", taskRoutes)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))