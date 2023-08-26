import Todos from "../models/todo.js";
import { Op } from "sequelize";

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
        .status(500)
        .json({ status: false, code: 500, message: "internal server error" });
    }
  },

  getTodo: async (req, res) => {
    try {
      let where = {};
      if (req.query.status) {
        where = {
          [Op.or]: {
            status: req.query.status,
          },
        };
      }

      const response = await Todos.findAll({
        where: where,
      });
      if (response) {
        res.status(200).json({
          status: true,
          code: 200,
          message: "success get todo",
          response,
        });
      } else {
        res
          .status(404)
          .json({ status: false, code: 404, message: "get todo not found" });
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ status: false, code: 500, message: "internal server error" });
    }
  },

  updateTodo: async (req, res) => {
    const getTodo = await Todos.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!getTodo) {
      return res
        .status(404)
        .json({ status: false, code: 404, message: "data not found" });
    }

    try {
      const { activity, status } = req.body;
      await Todos.update(
        {
          activity: activity,
          status: status,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({
        status: true,
        code: 200,
        message: "success update todo",
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ status: false, code: 500, message: "internal server error" });
    }
  },

  deleteTodo: async (req, res) => {
    const getTodo = await Todos.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!getTodo) {
      return res
        .status(404)
        .json({ status: false, code: 404, message: "data not found" });
    }
    try {
      await Todos.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        status: true,
        code: 200,
        message: "success delete todo",
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ status: false, code: 500, message: "internal server error" });
    }
  },
};
