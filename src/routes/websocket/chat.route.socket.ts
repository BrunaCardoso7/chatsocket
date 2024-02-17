import { io } from "../../main";
import { Namespace } from "socket.io";
import { chatPrivateControler } from "../../controller/websocket/chat.socket.controler";

export const ioNamespace: Namespace = io.of('/chat')
ioNamespace.on('connection', chatPrivateControler)
