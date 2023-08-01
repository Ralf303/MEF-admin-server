import sequelize from "../config.js";
import { DataTypes } from "sequelize";
import User from "./User-model.js";

const Item = sequelize.define("item", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  src: { type: DataTypes.STRING },
  itemName: { type: DataTypes.STRING },
  bodyPart: { type: DataTypes.STRING },
  isWorn: { type: DataTypes.BOOLEAN, defaultValue: false },
  price: { type: DataTypes.INTEGER },
});

User.hasMany(Item, { as: "items" });

export default Item;
