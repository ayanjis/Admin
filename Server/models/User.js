import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },

        email: {
            type: String,
            require: true,
        },

        phone: {
            type: Number,
            require: true,
        },
    }, { timestamps: true })

export const User = new mongoose.model('User', userSchema)