import bcrypt from "bcrypt";
import fs from "fs";

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  const resultJson = await fs.readFileSync("./db.json", "utf-8");
  const result = JSON.parse(resultJson);
  const user = result.users.find((el) => el.email === email);
  if (!user) {
    res.status(200).send("password or email is not match");
    return;
  }

  const isMatch = await bcrypt.compare(password, user.Hashedpassword);
  if (!isMatch) {
    res.status(200).send("password or email is not match");
    return;
  }

  res.status(200).send("Log in  Success");
};
