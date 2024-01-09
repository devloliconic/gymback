import { DataTypes } from "sequelize";
import { db } from "../database.js";

import { Gym } from "./gym.js";

export const Contact = db.define(
  "contact",
  {
    contact_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, timestamps: false }
);
