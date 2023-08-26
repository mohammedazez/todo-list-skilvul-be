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
router.get("/todo", apiController.getTodo);
router.put("/todo/:id", apiController.updateTodo);
router.delete("/todo/:id", apiController.deleteTodo);
export default router;
