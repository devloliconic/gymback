import { Admin } from "../modules/admin.js";
import passwordHash from "password-hash";

import { connectToDatabase } from "../database.js";

const init = async () => {
  await connectToDatabase();
  const hashedPassword = passwordHash.generate("admin");

  await Admin.create({
    login: "admin",
    password: "admin",
    role: "admin",
    gym_id: 1,
    firstName: "admin",
    lastName: "admin",
    middleName: "admin",
    coast: 1,
  });
};

init();
