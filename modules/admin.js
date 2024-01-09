import { DataTypes } from "sequelize";
import { db } from "../database.js";

import { Gym } from "./gym.js";

export const Admin = db.define(
  "admin",
  {
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
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
  },
  { sequelize: db, timestamps: false }
);

Admin.belongsTo(Gym, { foreignKey: "gym_id" });
