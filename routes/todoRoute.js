import express from "express";
import { apiController } from "../controllers/todoController.js";

const router = express.Router();
router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});
router.post("/todo", apiController.createTodo);

export default router;
