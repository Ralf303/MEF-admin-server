import sequelize from "../config.js";
import { DataTypes } from "sequelize";

const Logs = sequelize.define("logs", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  date: { type: DataTypes.STRING },
  action: { type: DataTypes.STRING },
  userOne: { type: DataTypes.STRING },
  userTwo: { type: DataTypes.STRING, defaultValue: "no" },
});

export default Logs;
