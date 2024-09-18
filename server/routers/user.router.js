import { Router } from "express";
import {
  loginController,
  signupController,
} from "../controllers/users/index.js";

const userRouter = Router();

userRouter.route("/signup").post(signupController);
userRouter.route("/login").post(loginController);

export default userRouter;
