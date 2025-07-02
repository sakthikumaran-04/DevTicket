import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"project must have a name"]
    },
    description:{
        type:String,
        required:[true,"project must have a description"]
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:[true,"project must have the creator"]
    },
    team:{
        type:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
        default:[]
    }
})

export const Project = mongoose.model("Project",projectSchema);