import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const {
  DB_NAME_SKILVUL,
  DB_USER_SKILVUL,
  DB_PASSWORD_SKILVUL,
  DB_HOST_SKILVUL,
  DB_DIALECT,
} = process.env;

const db = new Sequelize(
  DB_NAME_SKILVUL,
  DB_USER_SKILVUL,
  DB_PASSWORD_SKILVUL,
  {
    host: DB_HOST_SKILVUL,
    dialect: DB_DIALECT,
  }
);

export default db;
