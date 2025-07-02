import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"ticket must have a title"]
    },
    description:{
        type:String,
        required:[true,"ticket must have a description"]
    },
    status:{
        type:String,
        enum:["todo", "in-progress", "done"],
        default:"todo"
    },
    priority:{
        type:String,
        enum:["low","medium","high"],
        default:"medium"
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
        required:true
    },
    createdBy:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    assignedTo:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" 
    },
},{timestamps:true});

export const Ticket = mongoose.model("Ticket",ticketSchema);