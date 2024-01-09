import { Admin } from "../modules/admin.js";
import passwordHash from "password-hash";

import { connectToDatabase } from "../database.js";
import { User } from "../modules/user.js";

const init = async () => {
  await connectToDatabase();

  await User.create({
    email: "123@mail.ru",
    password: "123",
  });
};

init();
