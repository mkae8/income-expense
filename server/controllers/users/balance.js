import fs from "fs";

export const balanceController = async (req, res) => {
  const { balance } = req.body;
  const { userId } = res.locals;

  const dbPath = "/Users/24LP9087/Desktop/income&expenseTracker/server/db.json";

  const resultJson = await fs.readFileSync(dbPath, "utf-8");
  const result = JSON.parse(resultJson);
  const user = result.users.find((el) => el.userId === userId);

  user.balance = balance;

  await fs.writeFileSync(dbPath, JSON.stringify(result), "utf-8");

  res.send(user);
};
