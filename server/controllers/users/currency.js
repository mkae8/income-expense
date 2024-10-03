import { sql } from "../../database/index.js";

export const currencyController = async (req, res) => {
  const { currency } = req.body;
  const { userid } = res.locals;

  // if (currency.length > 3) {
  //   return res.status(400).send("Currency code must be 3 characters or less.");
  // }

  try {
    await sql`UPDATE users SET currency=${currency} WHERE userid=${userid}`;
    res.status(200).send({ message: "Successfully currency added" });
  } catch (error) {
    console.log(error.response.data);
  }
};
