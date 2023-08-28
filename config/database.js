import Sequelize from "sequelize";

const db = new Sequelize("aziz_database", "aziz_db", "admin123@", {
  host: "rm-d9joak34kay01t4268o.mysql.ap-southeast-5.rds.aliyuncs.com",
  dialect: "mysql",
});

export default db;
