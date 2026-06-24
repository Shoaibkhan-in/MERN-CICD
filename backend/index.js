import express from 'express'
import mongoose from 'mongoose'
const app = express()
import {connectDB} from './connectDB/connect.js'
import routes from './router/routes.js'
import cors from 'cors'

app.use(cors())
app.use(express.json())
app.use("/api", routes)


app.listen(5000, (req, res)=>{
    connectDB()
    console.log("the app is running on port 5000")
})
