import bcrypt from "bcrypt";
import fs from "fs";

export const signupController = async (req, res) => {
  const { username, email, password, rePassword } = req.body;
  const resultJson = await fs.readFileSync("./db.json", "utf-8");
  const result = JSON.parse(resultJson);

  const user = result.users.find((el) => el.username === username);

  console.log(user);

  if (user) {
    res.status(400).send("ner n davhtsaj bn");
    return;
  }
  const hashedPassword = bcrypt.hashSync(password, 10);
  result.users.push({
    username,
    email,
    rePassword,
    password,
    Hashedpassword: hashedPassword,
  });
  await fs.writeFileSync("./db.json", JSON.stringify(result), "utf-8");
  res.send("Success");
};
