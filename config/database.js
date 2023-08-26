const { Sequelize } = require("sequelize");

const db = new Sequelize(
  "todo-list-skilvul",
  "root",
  "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",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

export default db;
