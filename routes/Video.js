import express from "express";
import {addVideo,deleteVideo,upadteVideo,subscribe} from '../controllers/video.js'
import { verifyToken } from "../routes/verifytoken.js";
const router=express.Router()

router.post('/',verifyToken,addVideo)

router.put('/:id',verifyToken,)

router.delete('/:id',verifyToken,)

router.get('/find/:id ',)
router.put('/view/:id')
router.get("/trend")
router.get("/random");
router.get("/sub",verifyToken,subscribe)
export default router;

