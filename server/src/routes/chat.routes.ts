import {Router} from 'express';
import { ChatController } from '../controllers/chat/chat.controller';
import authMiddleware from '../middleware/auth.middleware';
const chatRouter = Router();

const chatController = new ChatController();


// // Get all chats
chatRouter.get('/all',authMiddleware, chatController.getallchats);

// // Access or create one-to-one chat
chatRouter.post('/one-to-one', authMiddleware, chatController.accessOneToOneChat);
chatRouter.post("/group",  authMiddleware, chatController.createGroupChat);
chatRouter.put("/group/add",  authMiddleware, chatController.addToGroupChat);
chatRouter.put("/group/remove",  authMiddleware, chatController.removeUsersFromGroupChat);


export default chatRouter;