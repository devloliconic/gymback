import { DataTypes } from "sequelize";
import { db } from "../database.js";
import { Gym } from "./gym.js";

export const Coach = db.define("coach", {
  coach_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  middleName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coast: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gym_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Coach.belongsTo(Gym, { foreignKey: "gym_id" });
