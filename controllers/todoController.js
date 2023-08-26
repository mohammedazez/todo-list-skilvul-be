import Todos from "../models/todo.js";

export const apiController = {
  createTodo: async (req, res) => {
    try {
      const { activity, status } = req.body;
      const todo = await Todos.create({
        activity,
        status,
      });
      res.status(201).json({
        status: true,
        code: 201,
        message: "success create todo",
        todo,
      });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .json({ status: false, code: 400, message: "failed create todo" });
    }
  },

  getTodo: async (req, res) => {
    try {
      const response = await Todos.findAll();
      if (response) {
        res.status(200).json({
          status: true,
          code: 200,
          message: "success get todo",
          response,
        });
      } else {
        res
          .status(400)
          .json({ status: false, code: 400, message: "get todo not found" });
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ status: false, code: 500, message: "failed get todo" });
    }
  },
};
