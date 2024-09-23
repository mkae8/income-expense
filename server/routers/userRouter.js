import { Router } from "express";
import {
  loginController,
  signupController,
} from "../controllers/users/index.js";
import { authMiddleware } from "../middlewares/auth.js";
import { getUserById } from "../controllers/users/allUsers.js";
import { currencyController } from "../controllers/users/currency.js";

const userRouter = Router();

userRouter.route("/signup").post(signupController);
userRouter.route("/login").post(loginController);
userRouter.post("/users", authMiddleware, getUserById);
userRouter.post("/currency", authMiddleware);

export default userRouter;
