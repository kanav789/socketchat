import chat from "../../models/chat.model";
import Message from "../../models/message.model";
import { Response, Request } from "express";

export class MessagesController {
    // get all messages of specific chat

    public getMessagesByChat = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { chatId } = req.params;
            if (!chatId) {
                return res.status(400).json({ message: "chatId is required" });
            }
            const messages = await Message.find({ chat: chatId }).populate("sender", "name email avatar").populate("chat");
            return res.status(200).json({
                message: "Messages fetched successfully",
                messages
            });

        } catch (error) {
            console.error("getMessagesByChat error:", error);
            return res.status(500).json({
                message: "Failed to fetch messages"
            });
        }
    }


    // send a new message 

    public sendMessage = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { content , chatId, messageType} = req.body;
            const senderID = (req as any).user._id;
            if (!content || !chatId) {
                return res.status(400).json({ message: "content and chatId are required" });
            }
            const newMessage = await Message.create({
                sender: senderID,
                chat: chatId,
                content,
                messageType
            });
            if(!newMessage){
                return res.status(500).json({message:"Unable to send message"});
            }

            // update latest message in chat

            await chat.findByIdAndUpdate(chatId, { latestMessage: newMessage._id });

            const fullMessage = await Message.findById(newMessage._id).populate("sender", "name email avatar").populate("chat");

            return res.status(201).json({
                message: "Message sent successfully",
                fullMessage
            });
            
        } catch (error) {
            console.error("sendMessage error:", error);
            return res.status(500).json({
                message: "Failed to send message"
            });
        }
    }

    }