import express from "express";
import todoRoute from "./todoRoute.js";

const router = express.Router();

router.use("/ap1/v1", todoRoute);
export default router;
