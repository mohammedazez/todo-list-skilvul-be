import express from "express";
import todoRoute from "./todoRoute.js";

const router = express.Router();

router.use("/api/v1", todoRoute);
export default router;
