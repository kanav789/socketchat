import { Request, Response } from "express";
import UserModel from "../../models/user";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.JWT_SECRET as string;

export class AuthController {

  /* =========================
     SIGNUP
  ========================= */
  
  public signup = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }

      // ⚠️ Plain password (not recommended, but per request)
      const user = await UserModel.create({
        name,
        email,
        password,
      });

      const token = jwt.sign(
        { id: user._id },
        secretKey,
        { expiresIn: "24h" }
      );

      return res.status(201).json({
        message: "User created successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
        token,
      });
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred",
        error,
      });
    }
  };

  /* =========================
     SIGNIN
  ========================= */
  public signin = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const user = await UserModel.findOne({ email }).select("+password");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // ⚠️ Plain-text comparison
      if (user.password !== password) {
        return res.status(401).json({ message: "Invalid password" });
      }

      const token = jwt.sign(
        { id: user._id },
        secretKey,
        { expiresIn: "24h" }
      );

      return res.status(200).json({
        message: "User signed in successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
        token,
      });
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred",
        error,
      });
    }
  };
}
