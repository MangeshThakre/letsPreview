import express from "express";
import controller from "../controller/linkcontroller.js";
const router = express.Router();
router.get("/url", controller.url);
export default router;
