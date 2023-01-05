 
 import { createError } from "../err.js"
 import User from '../models/User.js'
 export   const update= async (req,res,next)=>{
  //router id===jwt id//from jst user=userid
  if(req.params.id===req.user.id)
  {
    const updatedUser=await User.findByIdAndUpdate(req.params.id,{
      $set:req.body
      
    },{new:true}//update new name instead of test
    )
    res.status(200).json(updatedUser)
     
  }
  else
  {
    return next(createError(403,"you can alter only your account"))
  }
  
 
 }
 export   const deletes= async (req,res,next)=>{
  if(req.params.id===req.user.id)
  {
    const updatedUser=await User.findByIdAndDeletes(req.params.id
     
      
      
     
    )
    res.status(200).json("user has been deleted")
     
  }
  else
  { return next(createError(403,"you can delete only your account"))
}
  
 }
 export   const getuser=async (req,res,next)=>{
  if(req.params.id===req.user.id)
  {
    const updatedUser=await User.findByIds(req.params.id
      
      
     
    )
    res.status(200).json("user has been find")
     
  }
  else
  {
    return next(createError)
  }
  
    
 }
 export   const subscribe=async(req,res,next)=>{
  
  try{
  await User.findByIdAndUpdate(req.user.id,{ //jwt id other channels route  
    $push:{subscribedUsers:req.params.id}
  }) 
  await User.findByIdAndUpdate(req.params.id,{
    $inc:{subscribers:1},
  })
  res.status(200).json("subscribtion suncesful")
   
 
  }
  catch(err){
    next(err)

  }
  
 }
 export   const unsunbscribe=async(req,res,next)=>{
  try{
    await User.findById(req.user.id,{ //jwt id other channels route  
      $pull :{subscribedUsers:req.params.id}
    }) 
    await User.findByIdAndUpdate(req.params.id,{
      $inc:{subscribers:-1},
    })
    res.status(200).json("unsubscribtion suncesful")
     
   
    }
    catch(err){
      next(err)
  
    }
 }
 export   const like =(req,res,next)=>{
  
 }
 export   const dislike =(req,res,next)=>{
  
 }