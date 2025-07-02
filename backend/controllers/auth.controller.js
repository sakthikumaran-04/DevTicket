import { User } from "../models/user.model.js";
import { generateAndSetCookie } from "../utils/utils.js";
import bcrypt from "bcryptjs";

export async function registerUser(req,res){
    try {
        const { name,email,password } = req.body;
        if(!name.trim() || !email.trim() || !password ){
            return res.status(400).json({success:false, message:"all fields are required"});
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({success:false, message: "Invalid email format" });
        }
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).josn({success:false, message: "user with email already exists"});
        }
        const newUser = new User({name,email,password});
        newUser.save();
        return res.json({success:true,message:"user created successfully"});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message})
    }
}

export async function login(req,res) {
    const {email,password} = req.body;
    if(!email.trim() || !password ){
        return res.status(400).json({success:false, message:"all fields are required"});
    }
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({success:false, message:"user with email not exist"})
    }
    if(!bcrypt.compare(user.password,password)){
        return res.status(400).json({success:false, message:"Invalid credentials"})
    }
    generateAndSetCookie(res,user._id);
    return res.json({success:true, message:"login successful"});
}