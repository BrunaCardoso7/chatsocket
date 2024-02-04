import { io } from "../../main";
import { Namespace } from "socket.io";
import { chatPrivateControle } from "../../controller/websocket/chat.socket.controler";

export const ioNamespace: Namespace = io.of('/chat')
ioNamespace.on('connection', chatPrivateControle)
