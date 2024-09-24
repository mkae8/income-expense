import fs from "fs";

export const balanceCard = async (req, res) => {
  const { userId } = res.locals;

  const dbPath = "/Users/24LP9087/Desktop/income&expenseTracker/server/db.json";

  const resultJson = await fs.readFileSync(dbPath, "utf-8");
  const result = JSON.parse(resultJson);
  const user = result.users.find((user) => user.userId === userId);

  res.send(user);
};
