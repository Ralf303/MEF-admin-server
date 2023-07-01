import { Sequelize } from "sequelize";

export default new Sequelize("MEF", "root", "root", {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
});
