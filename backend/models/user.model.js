import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"user must have a name"]
    },
    email:{
        type:String,
        required:[true,"user must have a email"]
    },
    password:{
        type:String,
        required:[true,"user must have a password"]
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
},{timestamps:true});

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password = bcryptjs.hashSync(this.password,10);
    next();
})

export const User = mongoose.model("User",userSchema);