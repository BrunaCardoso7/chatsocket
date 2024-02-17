"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ioNamespace = void 0;
const main_1 = require("../../main");
const chat_socket_controler_1 = require("../../controller/websocket/chat.socket.controler");
exports.ioNamespace = main_1.io.of('/chat');
exports.ioNamespace.on('connection', chat_socket_controler_1.chatPrivateControle);
