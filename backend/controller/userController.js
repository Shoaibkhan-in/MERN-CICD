import userModel from "../model/userModel.js";
import Users from "../model/Users.js";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'



export const addUser = async(req, res)=>{
    try{
        const {name, email} = req.body;
        const User = await userModel.create({
            name: name, 
            email: email
        })

        

        
        await User.save();

        return res.status(202).send("user created successfully")
    }catch(e){
        res.status(400).send(e.message)
    }
}


export const getUser = async(req, res)=>{
    try {
        const user =await userModel.find({})

        return res.status(200).json({message:"users", data:user})
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const registerUser = async(req, res)=>{
    try {
        const {Username, Email, Password} = req.body;
        const userPassword =await hash(Password, 10)
        
        const user = await Users.create({
            Username, 
            Email, 
            Password:userPassword
        })
        await user.save()
        return res.status(201).send("User Created Successfully")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

export const loginUser = async(req, res)=>{
    try {
        const{Username, Password} = req.query;
        const user = await Users.findOne({Username:Username})
        const verify = await compare(Password, user.Password)
        if(!verify){
            return res.status(400).send("wrong password")
        }
        const token =await jwt.sign({Username, "email":"Shoaibkhan@1234.com"},process.env.REACT_APP_SECRET_KEY, {expiresIn:"1hr"})
        return res.status(200).json({message:"user logged in successfully", token})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


export const userVerify = async(req, res)=>{
    try {
        const {token} = req.body
        const verified = jwt.verify(token, process.env.REACT_APP_SECRET_KEY)
        if(!verified){
            return res.status(400).send("wrong key")
        }
        return res.status(200).json({"message":"key verified","validation":verified })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}