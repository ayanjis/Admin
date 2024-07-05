import express from 'express'
import { createUsre, getUsers, updateUser, deleteUser } from '../controller/userController.js'

export const router = express.Router()

router.post('/createuser', createUsre)
router.get('/getUsers', getUsers)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)