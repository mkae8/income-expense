import { Router } from "express";
import {
  loginController,
  signupController,
} from "../controllers/users/index.js";

const userRouter = Router();

userRouter.route("/user/signup").post(signupController);
userRouter.route("/user/login").post(loginController);

export default userRouter;
