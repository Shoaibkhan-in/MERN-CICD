import mongoose from "mongoose";


export const connectDB = async()=>{
    await mongoose.connect('mongodb://mongodb:27017/mydb')
}


