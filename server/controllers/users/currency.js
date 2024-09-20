import bcrypt from "bcrypt";
import fs from "fs";
import env from "dotenv";
import { v4 as uuidv4 } from "uuid";

env.config();

export const Currency = async (req, res) => {
  const { mnt, usd } = req.body;
  const resultJson = await fs.readFileSync("./db.json", "utf-8");
  const result = JSON.parse(resultJson);
  result.users.currency.push({});
  res.send("amjilttai nemegdlee").status(200);
};
