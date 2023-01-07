import { createError } from "../err.js"
import Comment  from "../models/Comment.js"
import Video from '../models/Video.js '
export const addComment=async(req,res,next)=>{
    const comment=new Comment({userId:req.user.id,...req.body})
    try{
      const save=await comment.save()
      res.status(200).json(save)
    }
    catch(err)
    {
        next(err)

    }
}
export const deleteComment=async(req,res,next)=>{

    try{
        const comment=await Comment.findById(req.params.id)
        const video=await Video.findById(req.params.id)
        //deleete only when our comment or owner of video
        if(req.user.id=== comment.userId || req,user.id===video.userId)
        {await Comment.findByIdAndDelete(req.params.id)
      res.status(200).json("comment deleted")}
    else{
       // return next(createError(403,"you can delete only your commnet"))

    }
}
    catch(err)
    {
        next(err)

    }
}
export const getComment=async(req,res,next)=>{

    try{
      const comment=await Comment.find({videoId:req.params.videoId})
      res.status(200).json(comment)
    }
    catch(err)
    {
        next(err)

    }
}