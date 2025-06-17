import express from "express";
import { protectRoute } from "../midleware/auth.midleware.js";
import {sendRequest, getRequests, deleteRequest} from "../controllers/message.controller.js"
import { upload } from "../lib/multer.js";

const router= express.Router();
router.get('/getrequests',protectRoute, getRequests);
router.post('/sendrequest',upload.array('files'), sendRequest);
router.post('/deleterequest',protectRoute, deleteRequest);


export default router;