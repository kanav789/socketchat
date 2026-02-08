import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";

interface JwtPayload {
  id: string;
}

export interface AuthenticatedRequest extends Request {
  user?: {
    _id: string;
    name: string;
    email: string;
    role?: string;
  };
}

const authMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    /* =====================
       1️⃣ LOG INCOMING DATA
    ====================== */
    console.log("🔐 Auth headers:", {
      authorization: req.headers.authorization,
      apiKey: req.headers["x-api-key"],
    });

    /* =====================
       2️⃣ API KEY CHECK
    ====================== */
    const apiKey = req.headers["x-api-key"];

    if (!apiKey || apiKey !== process.env.API_KEY) {
      return res.status(401).json({
        message: "Invalid or missing API key",
      });
    }

    /* =====================
       3️⃣ TOKEN CHECK
    ====================== */
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    let decoded: JwtPayload;

    try {
      decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as JwtPayload;
    } catch {
      return res.status(401).json({
        message: "Invalid or expired token",
      });
    }

    /* =====================
       4️⃣ USER EVALUATION
    ====================== */
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    /* =====================
       5️⃣ ATTACH USER
    ====================== */
    req.user = {
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
    };

    console.log("✅ Authenticated user:", req.user);

    next();
  } catch (error) {
    console.error("🚨 Auth middleware error:", error);
    return res.status(500).json({
      message: "Authentication failed",
    });
  }
};

export default authMiddleware;
