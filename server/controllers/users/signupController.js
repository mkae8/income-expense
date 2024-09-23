import bcrypt from "bcrypt";
import fs from "fs";
import env from "dotenv";
import { v4 as uuidv4 } from "uuid";

env.config();

export const signupController = async (req, res) => {
  const dbPath = "/Users/24LP9087/Desktop/income&expenseTracker/server/db.json";
  const { name, password, email } = req.body;
  const resultJson = await fs.readFileSync(dbPath, "utf-8");
  const result = JSON.parse(resultJson);

  const user = result.users.find((el) => el.email === email);

  if (user) {
    res.status(400).send("iim email burtgeltei bnaa");
    return;
  }

  const hashedpassword = await bcrypt.hashSync(
    password,
    Number(process.env.SALT)
  );
  result.users.push({
    userId: uuidv4(),
    name,
    email,
    password: hashedpassword,
  });

  await fs.writeFileSync("./db.json", JSON.stringify(result), "utf-8");

  res.send("amjilttai nemegdlee").status(200);
};
