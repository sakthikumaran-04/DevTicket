import mongoose from "mongoose";
import jwt from "jsonwebtoken";
export const connectToDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database Connected: ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Error connection to MongoDb: ${error.message}`);
        process.exit();
    }
}

export function generateAndSetCookie(res,userId){
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"7d"
    });
    res.cookie("token",token,{
        httpOnly:true,
        secure: process.env.NODE_ENV === "production",
        sameSite:"strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
}