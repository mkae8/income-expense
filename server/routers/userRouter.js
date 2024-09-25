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
userRouter.get("/user", authMiddleware, getUserById);
userRouter.post("/currency", authMiddleware, currencyController);
userRouter.post("/balance", authMiddleware, balanceController);

export default userRouter;
