import express  from "express";
import {verifyToken} from './verifytoken.js'
import {update,deletes,getuser,subscribe,unsunbscribe,like,dislike} from "../controllers/user.js";
const router=express.Router();
//update user
router.put("/:id",verifyToken,update

 )
//delete user
router.delete("/:id",verifyToken,deletes)
//get a usr
router.get("/find/:id",getuser)

//subscibr
router.put("/sub/:id",verifyToken,subscribe)
router.put("/unsub/:id",verifyToken,unsunbscribe)


//lke dis
router.put("/like/:videoId",verifyToken,like)


router.put("/dislike/:videoId",verifyToken,dislike)

export default router;

