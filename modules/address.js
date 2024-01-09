import { DataTypes } from "sequelize";
import { db } from "../database.js";

export const Address = db.define(
  "address",
  {
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    index: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, timestamps: false }
);
