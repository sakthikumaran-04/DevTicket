import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.json({success:true,message:"server is listening!"});
})

app.listen(5000,()=>{
    console.log("server running");
    
})