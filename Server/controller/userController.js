import { User } from "../models/User.js"


//CREATE API...........
export const createUsre = async (req, res) => {
    try {
        const {name, email, phone} = req.body
        const newUser = User({
            name, email, phone
        })
    await newUser.save()
    res.status(200).json({success: true, message:'User created Successfully', newUser})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message:'Internal server error', newUser})
    }
}

//READ API...........
export const getUsers = async (req, res) => {
    try {
        const user = await User.find()
        if (!user) {
            return res.status(404).json({success: false, message: 'User not found'})
        }
        res.status(200).json({success: true, user})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message:'Internal server error'})
    }
}

//UPDATE API...........
export const updateUser = async (req, res) => {
    try {
        const userID = req.params.id
        const UpdateUser = await User.findByIdAndUpdate(userID, req.body, {new: true})
        if (!UpdateUser) {
            return res.status(404).json({success: false, message: 'User not found'})
        }
        res.status(200).json({success: true, message: 'User update Successfully', UpdateUser})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message:'Internal server error'})
    }
}

//UPDATE API...........
export const deleteUser = async (req, res) => {
    try {
        const userID = req.params.id
        const DeleteUser = await User.findByIdAndDelete(userID)
        if (!DeleteUser) {
            return res.status(404).json({success: false, message: 'User not found'})
        }
        res.status(200).json({success: true, message: 'User Deleted  Successfully'})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message:'Internal server error'})
    }
}