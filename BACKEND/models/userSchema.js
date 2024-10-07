import mongoose from "mongoose";
import validator from "validator"
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:[3,"Name should be at least 3 characters"]
    },
    email:{
        type:String,
        required:true,
        minLength:[3,"Name should be at least 3 characters"],
        unique:true,
        validator:[validator.isEmail,"Invalid email"]
    },
    password:{
        type:String,
        required:true,
        minLength:[3,"Name should be at least 3 characters"],
    },
},{timestamps:true})

export const User=mongoose.model("User",userSchema);