import { Router } from "express";
import { UserController } from "../controllers/auth/user.controller";

const userRouter = Router();
const userController = new UserController();
userRouter.get("/getalluser", userController.getAllUsers);
export default userRouter;