import { DataTypes } from "sequelize";
import { db } from "../database.js";

export const Others = db.define("others", {
  others_id: {
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
