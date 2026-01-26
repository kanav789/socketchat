import { group } from "node:console";
import chat from "../../models/chat.model";
import { Response, Request } from "express";


export class ChatController {

    // get all chats of specfic user 

    public getallchats = async (req: Request, res: Response): Promise<Response> => {
        try {
            const userId = req.user?._id;
            if (!userId) {
                return res.status(401).json({ message: "Unauthorized" });
            }

            const chats = await chat.find({
                users: userId
            })
                .populate("users",)
                .populate("groupAdmin")
                .populate({
                    path: "latestMessage",
                    populate: {
                        path: "sender",
                        select: "name email avatar"
                    }
                })
                .sort({ updatedAt: -1 });
            return res.status(200).json({
                message: "Chats fetched successfully",
                chats
            });


        } catch (error) {
            console.error("Error fetching chats:", error);
            return res.status(500).json({
                message: "An error occurred",
            })
        }
    }


    // get one to one chat 

    public accessOneToOneChat = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { userId } = req.body;
            const currentUserId = req.user?._id;
            if (!currentUserId) {
                return res.status(401).json({ message: "Unauthorized" });
            }
            if (!userId) {
                return res.status(400).json({ message: "userId is required" });
            }


            // check if chat already exists
            let existchat = await chat.findOne({
                isGroupChat: false,
                users: { $all: [currentUserId, userId] }
            })
                .populate("users", "-password")
                .populate("latestMessage");
            if (existchat) {
                return res.status(200).json({
                    message: "Chat fetched successfully",
                    chat: existchat
                });
            }
            // create new chat
            const newChat = await chat.creat({
                isGroupChat: false,
                users: [currentUserId, userId]
            });
            const fullChat = await chat.findById(newChat._id)
                .populate("users", "-password");

            return res.status(201).json({ message: "Chat created successfully", chat: fullChat });

        }
        catch (error) {

        }

    }



    // create a group chat

    public createGroupChat = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { chatName, users } = req.body;
            const currentUserId = req.user?._id;
            if (!currentUserId) {
                return res.status(401).json({ message: "Unauthorized" });
            }
            if (!chatName || !users) {
                return res.status(400).json({ message: "chatName and users are required" });
            }
            if (users.length < 2) {
                return res.status(400).json({ message: "At least 2 users are required to create a group chat" });
            }
            // add creator to the users list
            users.push(currentUserId);

            const newGroupChat = await chat.create({
                isGroupChat: true,
                chatName,
                users,
                groupAdmin: currentUserId
            });

            const fullyGroupChat = await chat.findById(newGroupChat._id).populate("users", "-password").populate("groupAdmin", "-password");

            return res.status(201).json({ message: "Group chat created successfully", chat: fullyGroupChat });

        } catch (error) {
            console.error("Error creating group chat:", error);
            return res.status(500).json({ message: "An error occurred while creating group chat" });
        }

    }


    // add users to group chat 
    public addToGroupChat = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { chatId, userId } = req.body;
            const currentUserId = req.user?._id;
            if (!currentUserId) {
                return res.status(401).json({ message: "Unauthorized" });
            }
            // check if the requester is admin
            const groupChat = await chat.findById(chatId);
            if (groupChat?.groupAdmin.toString() !== currentUserId.toString()) {
                return res.status(403).json({ message: "Only group admin can add users" });
            }
            const updatedChat = await chat.findByIdAndUpdate(
                chatId,
                {
                    $push: { users: userId }
                },
                { new: true }
            ).populate("users", "-password").populate("groupAdmin", "-password");

            return res.status(200).json({ message: "User added to group chat successfully", chat: updatedChat });

        } catch (error) {
            console.error("addUserToGroup error:", error);
            return res.status(500).json({ message: "Failed to add user" });
        }
    }


    // remove users from group chat
    public removeUsersFromGroupChat = async (req: Request, res: Response): Promise<Response> => {
        try {
             const { chatId, userId } = req.body;
            const currentUserId = req.user?._id;
            if (!currentUserId) {
                return res.status(401).json({ message: "Unauthorized" });
            }
            // check if the requester is admin
            const havechat = await chat.findById(chatId);
            if(!havechat){
                return res.status(404).json({ message: "Chat not found" });
            }
            if (havechat?.groupAdmin?.toString() !== currentUserId.toString()) {
                return res.status(403).json({ message: "Only group admin can remove users" });
            }

            const updatechat = await chat.findByIdAndUpdate(
                chatId,
                {
                    $pull: { users: userId }
                },
                { new: true }
            ).populate("users", "-password").populate("groupAdmin", "-password");

            return res.status(200).json({ message: "User removed from group chat successfully", chat: updatechat });

        } catch (error) {
            console.error("removeUserFromGroup error:", error);
            return res.status(500).json({ message: "Failed to remove user" });

        }
          

    }


}



