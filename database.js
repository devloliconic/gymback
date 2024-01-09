import { Sequelize } from "sequelize";
export const db = new Sequelize("gym", "postgres", "user", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

export const connectToDatabase = async () => {
  try {
    await db.authenticate();
    await db.sync();
  } catch (e) {
    console.log("error when authenticating database");
  }
};
