import express from "express";
import todoRoute from "./todoRoute.js";

const router = express.Router();
router.get("/", (req, res) => {
  res.send("Todo list Skilvul, its working!");
});

router.use("/api/v1", todoRoute);
export default router;
