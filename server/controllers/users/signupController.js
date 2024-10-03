import bcrypt from "bcrypt";
import { sql } from "../../database/index.js";
import { v4 as uuidv4 } from "uuid";

export const signupController = async (req, res) => {
  const { username, password, email } = req.body;

  const user = await sql`SELECT * FROM users WHERE email=${email}`;

  if (user.length) {
    res.status(401).send({ message: "Email already registered" });
    return;
  }

  const userId = uuidv4();
  const createdAt = new Date();
  const hashedPassword = bcrypt.hashSync(password, 10);

  await sql`INSERT INTO users(userId, username, email, password, createdAt) VALUES(${userId}, ${username}, ${email}, ${hashedPassword}, ${createdAt})`;

  res.status(200).send({ message: "Successfully Registered" });
};
