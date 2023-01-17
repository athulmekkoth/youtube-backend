import mongoose from "mongoose"
import User from '../models/User.js'
import bcrypt from "bcrypt"
import {createError} from '../err.js'
import  Jwt  from "jsonwebtoken"
import dotenv from "dotenv"
//any monodb async 
//we cant so here api so insonmia
export const signup=async (req,res,next)=>{
    //console.log(req.body)
    try{
        var salt=bcrypt.genSaltSync(10)
        var hash=bcrypt.hashSync(req.body.password,salt)
        const newUser=new User({...req.body,password:hash})
        ///save to mfb
        await newUser.save()
        res.status(200).send("user has been created")
      
    }
    catch(err){
        next(err)
 
    }
}
    export const signin=async (req,res,next)=>{
        //console.log(req.body)
        try{
           const userfind=await User.findOne({name:req.body.name})
           if(!userfind)
            return  next(createError(404,"user not found"))    
            const isCorrect= await bcrypt.compare(req.body.password,userfind.password)
          if(!isCorrect)
            return next(createError(404,"user not found"))
            else{
                console.log("user find")
         
            }
            //to get detailas about user except password
            const token=Jwt.sign({id:userfind._id},process.env.JWT)
            const {password,...others}=userfind._doc//._doc illand cheytha uneeded things verum
            res
            .cookie("access_token",token,
            
        {
            
         httpOnly:true
        }).status(200)
        .json(others)
        }
      
        catch(err){
            next(err)
        } 
    }

    export const googleAuth = async (req, res, next) => {
        try {
          const user = await User.findOne({ email: req.body.email });
          if (user) {
            const token = Jwt.sign({ id: user._id }, process.env.JWT);
            res
              .cookie("access_token", token, {
                httpOnly: true,
              })
              .status(200)
              .json(user._doc);
          } else {
            const newUser = new User({
              ...req.body,
              fromGoogle: true,
            });
            const savedUser = await newUser.save();
            const token = Jwt.sign({ id: savedUser._id }, process.env.JWT);
            res
              .cookie("access_token", token, {
                httpOnly: true,
              })
              .status(200)
              .json(savedUser._doc);
          }
        } catch (err) {
          next(err);
        }
      };