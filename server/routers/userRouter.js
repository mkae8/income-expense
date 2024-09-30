import { Router } from "express";
import {
  loginController,
  signupController,
} from "../controllers/users/index.js";
import { authMiddleware } from "../middlewares/auth.js";
import { getUserById } from "../controllers/users/allUsers.js";
import { currencyController } from "../controllers/users/currency.js";
import { balanceController } from "../controllers/users/balance.js";
import { testController } from "../controllers/users/test.js";

const userRouter = Router();

userRouter.route("/signup").post(signupController);
userRouter.route("/login").post(loginController);
userRouter.get("/user", authMiddleware, getUserById);
userRouter.post("/user/currency", authMiddleware, currencyController);
userRouter.post("/user/balance", authMiddleware, balanceController);

userRouter.post("/user/dbtest", testController);
userRouter.delete("/user/dbtest", testController);
userRouter.put("/user/dbtest", testController);

export default userRouter;
