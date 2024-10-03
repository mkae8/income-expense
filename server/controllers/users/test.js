import { sql } from "../../database/index.js";
import { v4 as uuid } from "uuid";

export const testController = async (req, res) => {
  // ---> INSERT INTO  Inserts new data into a database and check email
  // const { username, email, password } = req.body;
  // const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;
  // if (existingUser.length) {
  //   res.status(400).send("Email already registered");
  //   return;
  // }
  // const createdAt = new Date();
  // const userId = uuid();
  // const result =
  //   await sql`INSERT INTO users(userId, username, email, password, createdAt) VALUES(${userId}, ${username}, ${email}, ${password}, ${createdAt})`;
  // res.status(201).send("Successfully Registered");
  // --->  SELECT  Extracts data from a database
  // const { username } = req.body;
  // const result = await sql`SELECT * FROM users WHERE username=${username}`;
  // res.send(result);
  // ---> DELETE deletes data from a database
  //   const { email } = req.body;
  //   const result = await sql`DELETE FROM users WHERE email = ${email}`;
  //   if (!result) {
  //     res.status(400).send("email not found");
  //     return;
  //   }
  //   res.status(200).send("User successfully deleted");
  // ---> UPDATE updates data in database
  //   const { email } = req.body;
  //   const result =
  //     await sql`UPDATE users SET username = 'mkae' WHERE email= ${email}`;
  //   res.status(200).send("User successfully updated");
};
