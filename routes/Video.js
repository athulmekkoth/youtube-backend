import express from "express";
import {addVideo,deleteVideo,upadteVideo,subscribe, random, tag,search,getVideo} from '../controllers/video.js'
import { verifyToken } from "../routes/verifytoken.js";
const router=express.Router()

router.post('/',verifyToken,addVideo)

router.put('/:id',verifyToken,)

router.delete('/:id',verifyToken,)
router.get('/find/:id', getVideo)

router.put('/view/:id')
router.get("/trend")
router.get("/random",random);
router.get("/sub",verifyToken,subscribe)
router.get("/tags",tag)
router.get("/search",search)
export default router;





