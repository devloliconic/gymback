import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import { connectToDatabase } from "./database.js";
import { accessTokenSecret } from "./conifgs/constants.js";
import passwordHash from "password-hash";
import { Admin } from "./modules/admin.js";
import jwt from "jsonwebtoken";
import { User } from "./modules/user.js";
import { Gym } from "./modules/gym.js";
import { Address } from "./modules/address.js";
import { Contact } from "./modules/contacts.js";
import { Ticket } from "./modules/ticket.js";
import { Coach } from "./modules/coach.js";
import { Equipment } from "./modules/equipment.js";
import { Others } from "./modules/others.js";
import { Workout } from "./modules/workout.js";

import swaggerUi from "swagger-ui-express";
import specs from "./swaggerConfig.js";

const port = 8000;

connectToDatabase();

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`server listen port ${port}`);
});

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      console.log(user);

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

app.post("/login", async (req, res) => {
  const { login, password } = req.body;
  console.log(login, password);

  const hashedPassword = await passwordHash.generate(password);
  const allAdmin = await Admin.findAll();
  console.log("allAdmin", allAdmin);

  const admin = await Admin.findOne({
    where: {
      login: login,
      password: password,
    },
  });
  console.log("admin", admin);

  if (admin) {
    const accessToken = jwt.sign({ login: admin.login, role: admin.role }, accessTokenSecret);

    res.json({
      accessToken,
    });
  } else {
    res.sendStatus(422);
  }
});

app.post("/user/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email);

  const user = await User.findOne({
    where: {
      email: email,
      password: password,
    },
  });

  if (user) {
    const accessToken = jwt.sign({ email: user.email }, accessTokenSecret);

    res.json({
      accessToken,
    });
  } else {
    res.sendStatus(422);
  }
});

app.post("/user/signUp", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.sendStatus(422);
    return;
  }

  const userByEmail = await User.findOne({ where: { email: email } });
  console.log("userByEmail", userByEmail);
  if (userByEmail) {
    res.sendStatus(422);
    return;
  }

  const user = await User.create({
    email: email,
    password: password,
  });

  console.log("user", user);

  if (user) {
    res.json({
      email: email,
      password: password,
    });
  } else {
    res.sendStatus(422);
  }
});

app.get("/me", authenticateJWT, async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];

  jwt.verify(token, accessTokenSecret, async (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    res.json(user);
  });
});

app.get("/user/me", authenticateJWT, async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];

  jwt.verify(token, accessTokenSecret, async (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    const findedUser = await User.findOne({
      where: {
        email: user.email,
      },
      include: Ticket,
    });

    const responseUser = {
      user_id: findedUser.user_id,
      email: findedUser.email,
      firstName: findedUser.firstName,
      lastName: findedUser.lastName,
      middleName: findedUser.middleName,
      gender: findedUser.gender,
      birthDate: findedUser.birthDate,
      tickets: findedUser.tickets,
    };

    console.log(user);
    res.json(responseUser);
  });
});

app.get("/gym", async (req, res) => {
  const allGyms = await Gym.findAll({
    include: [{ model: Address }, { model: Contact }, { model: Equipment }, { model: Others }],
  });

  res.json(allGyms);
});

app.get("/gym/:id", async (req, res) => {
  const { id } = req.params;
  if (!id || Number.isNaN(+id)) {
    res.sendStatus(422);
    return;
  }
  const gym = await Gym.findOne({
    where: { gym_id: id },
    include: [{ model: Address }, { model: Contact }, { model: Equipment }, { model: Others }],
  });

  if (!gym) {
    res.sendStatus(422);
    return;
  }

  res.json(gym);
});

app.post("/gym", async (req, res) => {
  const { name, сapacity, phoneNumber, email, address: addressString, index } = req.body;

  const address = await Address.create({ address: addressString, index });
  const contact = await Contact.create({ email: email, phoneNumber });

  const gym = await Gym.create({
    name: name,
    сapacity: сapacity,
    address_id: address.address_id,
    contact_id: contact.contact_id,
  });

  res.json(gym);
});

app.post("/gym/:id/equipment", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!id) {
    res.sendStatus(422);
  }
  const currentGym = await Gym.findOne({ where: { gym_id: id } });
  const equipment = await Equipment.create({ name: name, gym_id: id });
  const allEquipment = await Equipment.findAll();

  currentGym.addEquipment(equipment);

  const result = await Gym.findOne({
    where: { gym_id: id },
    include: [{ model: Address }, { model: Contact }, { model: Equipment }, { model: Others }],
  });

  res.json(result);
});
app.post("/gym/:id/others", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!id) {
    res.sendStatus(422);
  }
  const currentGym = await Gym.findOne({ where: { gym_id: id } });
  const others = await Others.create({ name: name, gym_id: id });

  currentGym.addOthers(others);

  const result = await Gym.findOne({
    where: { gym_id: id },
    include: [{ model: Address }, { model: Contact }, { model: Equipment }, { model: Others }],
  });

  res.json(result);
});

app.delete("/gym/:id/others/:othersId", async (req, res) => {
  const { id, othersId } = req.params;

  if (!id || !othersId) {
    res.sendStatus(422);
    return;
  }

  const currentGym = await Gym.findOne({ where: { gym_id: id } });
  const currentOthers = await Others.findOne({
    where: { others_id: othersId, gym_id: id },
  });

  if (!currentGym || !currentOthers) {
    res.sendStatus(422);
    return;
  }

  await Others.destroy({ where: { others_id: othersId, gym_id: id } });

  const result = await Gym.findOne({
    where: { gym_id: id },
    include: [{ model: Address }, { model: Contact }, { model: Equipment }, { model: Others }],
  });

  res.json(result);
});

app.delete("/gym/:id/equipment/:equipmentId", async (req, res) => {
  const { id, equipmentId } = req.params;

  if (!id || !equipmentId) {
    res.sendStatus(422);
    return;
  }

  const currentGym = await Gym.findOne({ where: { gym_id: id } });
  const currentOthers = await Equipment.findOne({
    where: { equipment_id: equipmentId, gym_id: id },
  });

  if (!currentGym || !currentOthers) {
    res.sendStatus(422);
    return;
  }

  await Equipment.destroy({ where: { equipment_id: equipmentId, gym_id: id } });

  const result = await Gym.findOne({
    where: { gym_id: id },
    include: [{ model: Address }, { model: Contact }, { model: Equipment }, { model: Others }],
  });

  res.json(result);
});

app.put("/gym/:id/others/:othersId", async (req, res) => {
  const { id, othersId } = req.params;
  const { name } = req.body;
  if (!id || !othersId) {
    res.sendStatus(422);
    return;
  }

  const currentOthers = await Others.findOne({
    where: { others_id: othersId, gym_id: id },
  });

  await currentOthers.update({ name: name });

  const result = await Gym.findOne({
    where: { gym_id: id },
    include: [{ model: Address }, { model: Contact }, { model: Equipment }, { model: Others }],
  });

  res.json(result);
});

app.put("/gym/:id/equipment/:equipmentId", async (req, res) => {
  const { id, equipmentId } = req.params;
  const { name } = req.body;
  if (!id || !equipmentId) {
    res.sendStatus(422);
    return;
  }

  const currentEquipment = await Equipment.findOne({
    where: { equipment_id: equipmentId, gym_id: id },
  });

  await currentEquipment.update({ name: name });

  const result = await Gym.findOne({
    where: { gym_id: id },
    include: [{ model: Address }, { model: Contact }, { model: Equipment }, { model: Others }],
  });

  res.json(result);
});

app.get("/gym/:id/others/:othersId", async (req, res) => {
  const { id, othersId } = req.params;
  if (!id || !othersId) {
    res.sendStatus(422);
  }

  const currentOthers = await Others.findOne({
    where: { others_id: othersId, gym_id: id },
  });

  if (!currentOthers) {
    res.sendStatus(422);
    return;
  }

  res.json(currentOthers);
});

app.get("/gym/:id/equipment/:equipmentId", async (req, res) => {
  const { id, equipmentId } = req.params;
  const { name } = req.body;
  if (!id || !equipmentId) {
    res.sendStatus(422);
  }

  const currentEquipment = await Equipment.findOne({
    where: { equipment_id: equipmentId, gym_id: id },
  });

  if (!currentEquipment) {
    res.sendStatus(422);
    return;
  }

  res.json(currentEquipment);
});

app.delete("/gym/:id", async (req, res) => {
  await Coach.destroy({ where: { gym_id: req.params.id } });
  await Gym.destroy({ where: { gym_id: req.params.id } });

  res.json(200);
});

app.put("/gym/:id", async (req, res) => {
  const { name, сapacity, phoneNumber, email, address: addressString, index, contact_id, address_id } = req.body;

  const address = await Address.findOne({ address_id: address_id });
  const contact = await Contact.findOne({ contact_id: email, phoneNumber });
  address.update({ address: addressString, index });
  contact.update({ email: email, phoneNumber });

  const gym = await Gym.findOne({ gym_id: req.params.id });
  gym.update({
    name: name,
    сapacity: сapacity,
    address_id: address.address_id,
    contact_id: contact.contact_id,
  });

  res.json(gym);
});

app.get("/client", async (req, res) => {
  const allGyms = await User.findAll({
    include: Ticket,
  });

  res.json(allGyms);
});

app.post("/clients", async (req, res) => {
  const { email, password, firstName, middleName, lastName, gender, birthDate } = req.body;

  const newUser = await User.create({
    email,
    password,
    firstName,
    middleName,
    lastName,
    gender,
    birthDate,
  });

  const result = await User.findOne({
    where: { user_id: newUser.user_id },
    include: Ticket,
  });

  res.json(result);
});

app.get("/client/:id", async (req, res) => {
  const { id } = req.params;
  const currentClient = await User.findOne({
    where: { user_id: id },
    include: Ticket,
  });
  console.log(currentClient);
  if (!currentClient) {
    res.sendStatus(422);
    return;
  }

  res.json(currentClient);
});

app.put("/client/:id", async (req, res) => {
  const { id } = req.params;
  const { email, password, firstName, middleName, lastName, gender, birthDate, ticketId } = req.body;

  const currentUser = await User.findOne({ where: { user_id: id } });

  await currentUser.update({
    email,
    password,
    firstName,
    middleName,
    lastName,
    gender,
    birthDate,
  });

  if (ticketId) {
    const ticket = await Ticket.findOne({ where: { ticket_id: ticketId } });
    await currentUser.removeTickets();
    await currentUser.setTickets(ticket, { through: { selfGranted: false } });
  }

  const result = await User.findOne({
    where: { user_id: id },
    include: Ticket,
  });

  res.json(result);
});

app.delete("/client/:id", async (req, res) => {
  await Workout.destroy({ where: { client_id: req.params.id } });
  await User.destroy({ where: { user_id: req.params.id } });

  res.json(200);
});

app.post("/client/:id/add-ticket", async (req, res) => {
  const { id } = req.params;
  const { ticketId } = req.body;
  if (!id || !ticketId) {
    res.sendStatus(422);
    return;
  }

  const currentUser = await User.findOne({ where: { user_id: id } });
  const ticket = await Ticket.findOne({ where: { ticket_id: ticketId } });
  if (!currentUser || !ticket) {
    res.sendStatus(422);
    return;
  }

  currentUser.addTicket(ticket);
  const result = await User.findOne({
    where: { user_id: id },
    include: Ticket,
  });

  res.send(result);
});

app.get("/ticket", async (req, res) => {
  const allTicket = await Ticket.findAll();
  res.json(allTicket);
});

app.get("/ticket/:id", async (req, res) => {
  const { id } = req.params;
  const currentTicket = await Ticket.findOne({
    where: { ticket_id: id },
  });
  if (!currentTicket) {
    res.sendStatus(422);
    return;
  }

  res.json(currentTicket);
});

app.post("/ticket", async (req, res) => {
  const { type, period, price } = req.body;

  const newTicket = await Ticket.create({
    type,
    period,
    price,
  });

  res.json(newTicket);
});

app.put("/ticket/:id", async (req, res) => {
  const id = req.params.id;
  const { type, period, price } = req.body;

  const currentTicket = await Ticket.findOne({ where: { ticket_id: id } });
  currentTicket.update({ type, period, price });

  res.json(currentTicket);
});

app.delete("/ticket/:id", async (req, res) => {
  await Ticket.destroy({ where: { ticket_id: req.params.id } });

  res.json(200);
});

app.get("/coach", async (req, res) => {
  const allCoaches = await Coach.findAll({
    include: [{ model: Gym }],
  });

  res.json(allCoaches);
});

app.get("/coach/:id", async (req, res) => {
  const coach = await Coach.findOne({
    where: { coach_id: req.params.id },
    include: [{ model: Gym, include: [{ model: Address }] }],
  });

  if (!coach) {
    res.sendStatus(422);
    return;
  }

  res.json(coach);
});

app.post("/coach", async (req, res) => {
  const { firstName, lastName, middleName, coast, gym_id } = req.body;

  const coach = await Coach.create({
    firstName,
    lastName,
    middleName,
    coast,
    gym_id,
  });

  res.json(coach);
});

app.put("/coach/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.sendStatus(422);
    return;
  }
  const { firstName, lastName, middleName, coast, gym_id } = req.body;

  const currentCoach = await Coach.findOne({ where: { coach_id: id } });
  currentCoach.update({
    firstName,
    lastName,
    middleName,
    coast,
    gym_id,
  });

  const result = await Coach.findOne({
    where: { coach_id: id },
    include: [{ model: Gym }],
  });

  res.json(result);
});

app.delete("/coach/:id", async (req, res) => {
  await Coach.destroy({ where: { coach_id: req.params.id } });

  res.json(200);
});

app.get("/workout", async (req, res) => {
  const allWorkout = await Workout.findAll({
    include: [{ model: User }, { model: Coach }, { model: Gym }],
  });
  res.json(allWorkout);
});

app.get("/workout/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(422);
    return;
  }

  const currentWorkout = await Workout.findOne({
    where: { workout_id: id },
    include: [{ model: User }, { model: Coach }, { model: Gym }],
  });

  res.json(currentWorkout);
});

app.delete("/workout/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.send(422);
    return;
  }

  await Workout.destroy({ where: { workout_id: id } });
  res.status(200);
});

app.post("/workout", async (req, res) => {
  const { client_id, coach_id, gym_id, date } = req.body;

  const newWorkout = await Workout.create({
    client_id,
    coach_id,
    date,
    gym_id,
  });

  res.json(newWorkout);
});

app.put("/workout/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(422);
    return;
  }

  const { client_id, coach_id, gym_id, date } = req.body;

  const currentWorkout = await Workout.findOne({ where: { workout_id: id } });

  await currentWorkout.update({ client_id, coach_id, gym_id, date });

  const result = await Workout.findOne({
    where: { workout_id: id },
    include: [{ model: User }, { model: Coach }, { model: Gym }],
  });

  res.json(result);
});

app.get("/workout/user/:userId", async (req, res) => {
  const { userId } = req.params;
  if (!userId) {
    res.status(422);
    return;
  }
  const reslut = await Workout.findAll({
    where: { client_id: userId },
    include: [{ model: User }, { model: Coach }, { model: Gym }],
  });

  if (!reslut) {
    res.status(422);
    return;
  }

  res.json(reslut);
});
