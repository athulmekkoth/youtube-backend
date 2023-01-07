import express  from "express";
const router=express.Router();
import{addComment,deleteComment,getComment} from '../controllers/comment.js'
import {verifyToken} from './verifytoken.js'
router.post('/',verifyToken,addComment)
router.delete('/:id',verifyToken,deleteComment)
router.get('/:videoId',verifyToken,getComment)


export default router;