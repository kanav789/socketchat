import express from "express";
import cors from "cors";

import authRouter from "../routes/auth.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/status", (req, res) => {
  res.json({ status: "API is running" });
});

app.use("/api/auth", authRouter);

export default app;
