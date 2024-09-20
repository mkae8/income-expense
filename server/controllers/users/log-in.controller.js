import bcrypt from "bcrypt";
import fs from "fs";
import jwt from "jsonwebtoken";

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  const secretKey = "gg";

  const resultJson = await fs.readFileSync("./db.json", "utf-8");
  const result = JSON.parse(resultJson);

  const user = result.users.find((el) => el.email === email);
  if (!user) {
    return res.status(400).send("Incorrect password or email ");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send("Incorrect password or email");
  }

  const token = jwt.sign({ id: user.id, email: user.email }, secretKey, {
    expiresIn: "1h",
  });

  res.send({ message: "Successfully logged in", token });
};
