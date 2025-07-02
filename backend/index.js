import express, { json } from "express";
import userRouter from "./routes/user.route.js";
import dotenv from "dotenv";
import { connectToDB } from "./utils/utils.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
const port = process.env.PORT || 5000
app.get("/",(req,res)=>{
    res.json({success:true,message:"server is listening!"});
})

app.use("/api/user",userRouter);

app.listen(port,async ()=>{
    await connectToDB();
    console.log(`server running at  http://localhost:${port}`);
})