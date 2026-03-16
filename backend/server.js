import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'

const PORT = process.env.PORT || 5000

const app = express()
dotenv.config()


app.use("/api/user", userRoutes)


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))