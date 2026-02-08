import express from "express";
import cors from "cors";

import authRouter from "../routes/auth.routes";
import chatRouter from "../routes/chat.routes";
import messageRouter from "../routes/message.routes";
import userRouter from "../routes/user.routes";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ status: "API is running" });
});


// auth routes
app.use("/api/auth", authRouter);

//  chat routes
app.use("/api/chat", chatRouter);

// message routes
app.use("/api/message", messageRouter);
// user routes
app.use("/api/user", userRouter);
export default app;
