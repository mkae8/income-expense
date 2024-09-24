import { Router } from "express";
import {
  balanceCard,
  loginController,
  signupController,
} from "../controllers/users/index.js";
import { authMiddleware } from "../middlewares/auth.js";
import { getUserById } from "../controllers/users/allUsers.js";
import { currencyController } from "../controllers/users/currency.js";
import { balanceController } from "../controllers/users/balance.js";

const userRouter = Router();

userRouter.route("/signup").post(signupController);
userRouter.route("/login").post(loginController);
userRouter.post("/users", authMiddleware, getUserById);
userRouter.post("/currency", authMiddleware, currencyController);
userRouter.get("/balance", authMiddleware, balanceController);

export default userRouter;
