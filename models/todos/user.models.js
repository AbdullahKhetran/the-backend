import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        // username: String valid but better approach below
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true, 
            // can pass custom error message too
            // required: [true, "password is required "]
        }
    },
    { timestamps: true}
)

export const User = mongoose.model("User", userSchema)