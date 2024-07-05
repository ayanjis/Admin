import mongoose from "mongoose";

const URI = process.env.MONGOODB_URI

export const connectDB = async () => {
    try {
        await mongoose.connect(URI)
        console.log('Connection Successfull with DB')
    } catch (error) {
        console.log('connection Failed with DB', error)
    }
}