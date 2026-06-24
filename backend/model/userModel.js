import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    "name":{
        type:String,
        require:true
    },
    "email":{
        type:String
    }

})

const userModel = mongoose.model("User", userSchema)

export default userModel;