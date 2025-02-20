import { Router } from "express";
import { getUser } from "../controllers/userController.js";

const userRouter = Router();

userRouter.route("/:id").get(getUser);

export default userRouter;
