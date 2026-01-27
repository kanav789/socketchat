import { Router } from "express";
import { MessagesController } from "../controllers/messages/messages.controller";
import authMiddleware from "../middleware/auth.middleware";
const messageRouter = Router();

const messagesController = new MessagesController();

// routes

messageRouter.get("/chat/:chatId", authMiddleware, messagesController.getMessagesByChat);
messageRouter.post("/send", authMiddleware, messagesController.sendMessage);

export default messageRouter;