import dotenv from "dotenv";
dotenv.config();
// http server call
import http from "http";
import { Server } from "socket.io";

import app from "./api/api";
import connectDb from "./database/configDb";

connectDb();

const PORT = process.env.PORT || 3000;

// create server
const server = http.createServer(app);

const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:5173", 
    credentials: true
  }
});



io.on("connection", (socket) => {
  console.log("⚡ Socket connected:", socket.id);
  socket.on("message",(msg)=>{
    console.log("Message received:", msg);
  })

  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (chatId) => {
    socket.join(chatId);
    console.log("User joined chat:", chatId);
  });

  socket.on("new message", (newMessage) => {
    const chat = newMessage.chat;

    if (!chat?.users) return;

    chat.users.forEach((user: any) => {
      if (user._id === newMessage.sender._id) return;

      socket.in(user._id).emit("message received", newMessage);
    });
  });

  socket.on("disconnect", () => {
    console.log("❌ Socket disconnected:", socket.id);
  });

  socket.on("error",(err)=> {
    console.error("Socket error:", err);
  });
});



server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
