import { useEffect } from "react";
import { socket } from "./socket";
import Navbar from "./pages/navbar/navbar";
import "./App.css"
import Menu from "./pages/navbar/menu";
export default function App() {
  const user = {
    name: "john doe",
    _id: "sjkjsdkkjk12672618768"
  };

  useEffect(() => {
    if (!user) return;

    console.log("his,nsnl")

    socket.connect();

    socket.on("connect", () => {
      console.log("🔗 Socket connected:", socket.id);
      socket.emit("message", "hello,world");

      // emit ONLY after connection
      socket.emit("setup", user);
    });

    socket.on("connected", () => {
      console.log("✅ Server acknowledged setup");
    });

    socket.on("connect_error", (err) => {
      console.error("❌ Socket error:", err.message);
    });

    return () => {
      socket.off("connect");
      socket.off("connected");
      socket.off("connect_error");
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <Navbar/>
      <Menu/>
    </div>
  );
}