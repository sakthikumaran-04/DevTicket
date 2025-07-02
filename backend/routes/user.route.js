import {Router} from "express";
import { login, registerUser } from "../controllers/auth.controller.js";

const userRouter = Router();
userRouter.post("/register", registerUser);
userRouter.post("/login",login);
export default userRouter;