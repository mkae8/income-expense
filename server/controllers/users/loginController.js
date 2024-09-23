import bcrypt from "bcrypt";
import fs from "fs/promises";
import jwt from "jsonwebtoken";
import env from "dotenv";

env.config();

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  const dbPath = "/Users/24LP9087/Desktop/income&expenseTracker/server/db.json";

  const resultJson = await fs.readFile(dbPath, "utf-8");
  const result = JSON.parse(resultJson);

  const user = result.users.find((el) => el.email === email);

  if (!user) {
    return res.status(400).send("Email not registered");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send("Incorrect password");
  }

  const token = jwt.sign(
    { id: user.userId, email: user.email },
    process.env.SECRET,
    {
      expiresIn: "1h",
    }
  );

  res.send({ message: "Successfully logged in", token });
};
