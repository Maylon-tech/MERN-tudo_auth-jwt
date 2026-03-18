import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import errorHandler from './middleware/errorMiddleware.js'

const PORT = process.env.PORT || 5000

const app = express()
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/user", userRoutes)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))