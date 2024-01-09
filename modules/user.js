import { DataTypes } from "sequelize";
import { db } from "../database.js";
import { Ticket } from "./ticket.js";

export const User = db.define("user", {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  middleName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  birthDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

User.belongsToMany(Ticket, { through: "User_Ticket" });
Ticket.belongsToMany(User, { through: "User_Ticket" });
