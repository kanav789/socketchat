import userModel from "../../models/user"
import { Response, Request } from "express";
export class UserController {
    public getAllUsers = async (req: Request, res: Response): Promise<Response> => {
        try {
            const users = await userModel.find();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ message: "An error occurred", error });
        }
    };
}