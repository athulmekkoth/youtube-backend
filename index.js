import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from './routes/Video.js';
import commentRoutes from './routes/Comment.js';
import authRoutes from './routes/auth.js'
import cookieParser from "cookie-parser";
mongoose.set('strictQuery', false);
import bodyParser from "body-parser";
//error handler

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
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes) //whuch end point use show

app.use("/api/videos",videoRoutes) 
app.use("/api/comments",commentRoutes) 
//error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
      success: false,
      status,
      message,
    });
  }); 

app.listen(5000,()=>{
  connect();
    console.log("connected")
})