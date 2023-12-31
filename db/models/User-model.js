import sequelize from "../config.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  chatId: { type: DataTypes.STRING, unique: true },
  username: { type: DataTypes.STRING },
  firstname: { type: DataTypes.STRING },
  captureCounter: { type: DataTypes.INTEGER, defaultValue: 0 },
  dayMessageCounter: { type: DataTypes.INTEGER, defaultValue: 0 },
  weekMessageCounter: { type: DataTypes.INTEGER, defaultValue: 0 },
  monthMessageCounter: { type: DataTypes.INTEGER, defaultValue: 0 },
  balance: { type: DataTypes.INTEGER, defaultValue: 0 },
  meflvl: { type: DataTypes.INTEGER, defaultValue: 1 },
  timelvl: { type: DataTypes.INTEGER, defaultValue: 1 },
  farmtime: { type: DataTypes.INTEGER, defaultValue: 0 },
  slots: { type: DataTypes.INTEGER, defaultValue: 10 },
  fullSlots: { type: DataTypes.INTEGER, defaultValue: 0 },
  minecraftCase: { type: DataTypes.INTEGER, defaultValue: 0 },
  brawlCase: { type: DataTypes.INTEGER, defaultValue: 0 },
  hotlineCase: { type: DataTypes.INTEGER, defaultValue: 0 },
  donateCase: { type: DataTypes.INTEGER, defaultValue: 0 },
  falloutCase: { type: DataTypes.INTEGER, defaultValue: 0 },
  gems: { type: DataTypes.INTEGER, defaultValue: 0 },
});

export default User;
