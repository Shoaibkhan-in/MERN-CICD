import mongoose from "mongoose";


const UsersSchema = new mongoose.Schema({
    Username:{
        type:String,
        require:true
    }, 
    Email:String,
    Password:{
        type:String, 
        require:true
    }
})

const Users = mongoose.model("Users", UsersSchema)

export default Users