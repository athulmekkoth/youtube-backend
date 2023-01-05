import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from './routes/Video.js';
import commentRoutes from './routes/Comment.js';


const app=express();
dotenv.config()

const connect=()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("connected to db")
    })
    .catch((err)=>{
        console.log("connected to db")
    })
}
app.use("/api/users",userRoutes) //whuch end point use show

app.use("/api/videos",videoRoutes) 
app.use("/api/commentcls",commentRoutes) 
app.listen(5000,()=>{
  connect();
    console.log("connected")
})