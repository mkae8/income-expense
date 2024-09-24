import fs from "fs";

export const currencyController = async (req, res) => {
  const { currency } = req.body;
  const { userId } = res.locals;

  const dbPath = "/Users/24LP9087/Desktop/income&expenseTracker/server/db.json";

  const resultJson = await fs.readFileSync(dbPath, "utf-8");
  const result = JSON.parse(resultJson);

  const user = result.users.find((user) => user.userId === userId);
  if (!user) {
    return res.status(404).send("User not found");
  }

  user.currency = currency;

  await fs.writeFileSync(dbPath, JSON.stringify(result), "utf-8");

  res.status(200).send("Successfully updated currency for user");
};
