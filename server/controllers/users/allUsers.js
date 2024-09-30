import { readFileSync } from "fs";

export const getUserById = async (req, res) => {
  const { userId } = res.locals;

  const resultJson = await readFileSync(
    "/Users/24LP9087/Desktop/income&expenseTracker/server/db.json",
    "utf-8"
  );
  const result = JSON.parse(resultJson);

  const user = result.users.find((el) => el.userId === userId);
  if (!user) {
    res.status(404).send("user not foumd");
    return;
  }

  res.send({ currency: user.currency, balance: user.balance });
};
