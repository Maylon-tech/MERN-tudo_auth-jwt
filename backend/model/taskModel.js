import mongoose from 'mongoose'

const taskSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add the task title'],            
        },
        category: {
            type: String,
            required: [true, 'Please add category type'],
            unique: true
        },
        description: {
            type: String,
            required: [true, 'Please inform the description'],
        },
    },
    {
        timestamps: true, 
    }
)

const Task = mongoose.model("Task", taskSchema)

export default Task