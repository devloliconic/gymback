import { DataTypes } from "sequelize";
import { db } from "../database.js";
import { User } from "./user.js";
import { Coach } from "./coach.js";
import { Gym } from "./gym.js";

export const Workout = db.define("workout", {
  workout_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  client_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  coach_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gym_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Workout.belongsTo(User, { foreignKey: "client_id" });
Workout.belongsTo(Coach, { foreignKey: "coach_id" });
Workout.belongsTo(Gym, { foreignKey: "gym_id" });
