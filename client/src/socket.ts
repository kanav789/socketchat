import { io, Socket } from "socket.io-client";

const ENDPOINT = "http://localhost:8777";

export const socket: Socket = io(ENDPOINT, {
  autoConnect: false, // important
  withCredentials: true
});