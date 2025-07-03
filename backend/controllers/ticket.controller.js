import { Ticket } from "../models/ticket.model.js";
import {User} from "../models/user.model.js"

export async function createTicket(req,res){
    try {
        const {title, description, status, priority, project, assignedTo} = req.body;
        if(!title.trim() || !description.trim() || !status.trim() || !priority.trim() || !project.trim() || !assignedTo.trim()){
            return res.status(400).json({success: false, message: "All fields are required"});
        }
        const createdBy = req.user;
        const ticket = new Ticket({title,description,status,priority,project,createdBy:createdBy._id,assignedTo});
        await ticket.save();
        return res.json({success:true, message:"ticket created successfully"});
    } catch (error) {
        return res.status(500).json({success:false, message: error.message});
    }
}

export async function getProjectTickets(req,res) {
    try {
        const projectId = req.params.id;
        const {status , priority} = req.query;
        const query = { project: projectId };
        if (status) query.status = status;
        if (priority) query.priority = priority;
        const tickets = await Ticket.find(query).populate("createdBy","name email").populate("assignedTo","name email");
        return res.json({success:true, data: tickets})
    } catch (error) {
        return res.status(500).json({success:false, message: error.message});
    }
}

export async function updateTicket(req,res) {
    
}
