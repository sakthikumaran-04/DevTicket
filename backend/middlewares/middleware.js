import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export async function checkAuth(req,res,next){
    try {
        const token = req.cookies?.token;
        if(!token){
            return res.status(400).json({success:false, message:"Unauthorized - no token provided"});
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(400).json({ success: false, message: "Unauthorized - Invalid token" });
        }
        const user = await User.findById(decoded.userId);
        if(!user){
            return res.status(400).json({success:false, message: "user doesn't exist"});
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}