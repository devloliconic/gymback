import { DataTypes } from "sequelize";
import { db } from "../database.js";
import { Address } from "./address.js";
import { Contact } from "./contacts.js";
import { Equipment } from "./equipment.js";
import { Others } from "./others.js";

export const Gym = db.define(
  "gym",
  {
    gym_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    сapacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    contact_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, timestamps: false }
);

Gym.belongsTo(Address, { foreignKey: "address_id" });
Gym.belongsTo(Contact, { foreignKey: "contact_id" });

Gym.hasMany(Equipment, { foreignKey: "gym_id" });
Gym.hasMany(Others, { foreignKey: "gym_id" });
//Equipment.belongsTo(Gym);
