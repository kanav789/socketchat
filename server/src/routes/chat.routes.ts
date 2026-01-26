import {Router} from 'express';
import { ChatController } from '../controllers/chat/chat.controller';
const chatRouter = Router();

const chatController = new ChatController();


// Get all chats
chatRouter.get('/all', chatController.getallchats);

// Access or create one-to-one chat
chatRouter.post('/one-to-one', chatController.accessOneToOneChat);
chatRouter.post("/group",  chatController.createGroupChat);
chatRouter.put("/group/add",  chatController.addToGroupChat);
chatRouter.put("/group/remove",  chatController.removeUsersFromGroupChat);


export default chatRouter;