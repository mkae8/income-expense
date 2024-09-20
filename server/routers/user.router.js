import { Router } from "express";
import {
  Currency,
  loginController,
  signupController,
} from "../controllers/users/index.js";

const userRouter = Router();

userRouter.route("/signup").post(signupController);
userRouter.route("/login").post(loginController);
userRouter.route("/signupdetails").post(Currency);

export default userRouter;
