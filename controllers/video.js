 
 import { createError } from "../err.js"
import User from "../models/User.js"
import Video from '../models/Video.js'
export const addVideo=async(req,res,next)=>{
    const newVideo=new Video ({userId:req.user.id,...req.body})
    try{
        const SavedVideo=await newVideo.save()
        res.status(200).json("SavedVideo")

    }
    catch(err)
    {
        next(err)
    }

}
export const upadteVideo=async(req,res,next)=>{
    try{
const video=await Video.findById(req.params.id)
if(!video) return next(createError(404,"video not found"))
if(req.user.id===video.user.id)
{
    const updatedVideo=await Video.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },{new:true}
    )
}
    }
    catch(err)
    {
        next(err)
    }
    
}
export const deleteVideo=async(req,res,next)=>{
    try{
        const video=await Video.findById(req.params.id)
        if(!video) return next(createError(404,"video not found"))
        if(req.user.id===video.user.id)
        {
            const updatedVideo=await Video.findByIdAndDelete(req.params.id)
            res.status(201).json("video deleted suceessfulyy")
        }
            }
            catch(err)
            {
                next(err)
            }
            
    
}
export const getVideo=async(req,res,next)=>{
    try{
       
        {
            const updatedVideo=await Video.findById(req.params.id)
            res.status(200 ).json(video)
        }
            }
            catch(err)
            {
                next(err)
            }
            
 }
 export const addView=async(req,res,next)=>{
    try{
       
        
            const updatedVideo=await Video.findByIdAndUpdate(req.params.id,{
                $inc:{views:1}
            })

            res.status(201).json("view has been increased")
        }
    
            catch(err)
            {
                next(err)
            }
            
 }
 export const random=async(req,res,next)=>{
    try{
       
        {
            //if we write find it will sort so we do agregate random sample
            const updatedVideo=await Video.aggregate([{$sample:{size: 40}}])
            res.status(201).json(video)
        }
            }
            catch(err)
            {
                next(err)
            }
            
 }
 export const trends=async(req,res,next)=>{
    try{
       
        {
            const updatedVideo=await Video.find().sort({views:-1}) //-1 mostvied 1 less
            res.status(201).json(video)
        }
            }
            catch(err)
            {
                next(err)
            }
            
 }
 export const subscribe=async(req,res,next)=>{
    try{
       
        {
            const user=await User.findByIdAndUpdate(req.user.id)
            const subscribedchannels=user.subscribedUsers
            const list= await promise.all(
                subscribedchannels.map((channelId)=>{
                    return Video.find({useId:channelId})
                })
            )
            res.status(201).json(list)
        }
            }
            catch(err)
            {
                next(err)
            }
 }
