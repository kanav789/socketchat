import { Router } from "express";

import { AuthController } from "../controllers/auth/auth.controller";

const authRouter = Router();
const authController = new AuthController();
// Signup route
authRouter.post("/signup", authController.signup);
authRouter.post("/signin", authController.signin);
export default authRouter;