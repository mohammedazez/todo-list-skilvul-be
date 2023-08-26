import Todos from "../models/todo.js";

export const apiController = {
  createTodo: async (req, res) => {
    try {
      const { activity, status } = req.body;
      const todo = await Todos.create({
        activity,
        status,
      });
      res.status(201).json({ message: "success create todo", todo });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "failed create todo" });
    }
  },
};
