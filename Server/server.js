import 'dotenv/config'
import express from 'express'
import cors  from 'cors'
import { connectDB } from './util/db.js'
import { router } from './routes/admin.route.js'

const app = express()
app.use(express.json())//MIDDLEWARE
app.use(cors())
app.use('/', router)

const PORT = process.env.PORT
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running PORT: ${PORT}`)
    })
})