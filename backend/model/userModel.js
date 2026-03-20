import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Please add you Username'],
            ref: "User"
        },
        email: {
            type: String,
            required: [true, 'Please add you Email'],
            unique: true
        },
        password: {
            type: String,
            required: [true, 'Please add you Password'],
        },
    },
    {
        timestamps: true, 
    }
)

const User = mongoose.model("User", userSchema)

export default User