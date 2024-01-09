import { DataTypes } from "sequelize";
import { db } from "../database.js";

export const Equipment = db.define("equipment", {
  equipment_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gym_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
