import sequelize from "../config.js";
import { DataTypes } from "sequelize";
import User from "./User-model.js";

const Roles = sequelize.define("roles", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  status: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
});

User.hasOne(Roles, { as: "role" });

export default Roles;
