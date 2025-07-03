import { Project } from "../models/project.model.js";

export async function createProject(req,res){
    try {
        const {code, name, description, team} = req.body;
        if(!name.trim() || !description.trim() || !code.trim()){
            return res.status(400).json({success:false, message: "All the fields are necessary"});
        }
        const createdBy = req.user;
        if(createdBy.role != "admin"){
            return res.status(400).json({success: false, message: "this process requires admin"})
        }
        const existingProject = await Project.findOne({code});
        if(existingProject){
            return res.status(400).json({success:false, message: "project with the code already exists!"})
        }
        const newProject = new Project({code,name,description,createdBy:createdBy._id,team});
        await newProject.save();
        return res.json({success:true, message:"project created successfully!"})
    } catch (error) {
        return res.status(500).json({success:false, message: error.message});
    }
}

export async function getAllProjects(req,res) {
    try {
        const user = req.user;
        if(user.role != "admin"){
            return res.status(400).json({success: false, message: "this process requires admin"})
        }
        const data = await Project.find().populate("createdBy","name email").populate("team","name email");
        return res.json({success:true, data});
    } catch (error) {
        return res.status(500).json({success:false, message: error.message});
    }
}

export async function getUserProjects(req,res){
    try {
        const user = req.user;
        const projects = await Project.find({
            team:user._id
        }).populate("createdBy", "name email").populate("team", "name email");
        return res.json({success:true, data:projects});
    } catch (error) {
        return res.status(500).json({success:false, message: error.message});
    }
}