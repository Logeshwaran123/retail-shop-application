import { Router } from "express";
import {
  getUser,
  signUpUser,
  loginUser,
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/signUp", signUpUser);
userRouter.get("/user", getUser);
userRouter.post("/login", loginUser);

export default userRouter;
