import express, { json } from "express";
import userRouter from "./routes/user.route.js";
import dotenv from "dotenv";
import { connectToDB } from "./utils/utils.js";
import cookieParser from "cookie-parser";
import projectRouter from "./routes/project.route.js";
import ticketRouter from "./routes/ticket.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
const port = process.env.PORT || 5000
app.get("/",(req,res)=>{
    res.json({success:true,message:"server is listening!"});
})

app.use("/api/user",userRouter);
app.use("/api/projects",projectRouter);
app.use("/api/tickets",ticketRouter);

app.listen(port,async ()=>{
    await connectToDB();
    console.log(`server running at  http://localhost:${port}`);
})