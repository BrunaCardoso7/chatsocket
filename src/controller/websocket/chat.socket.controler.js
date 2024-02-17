"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatPrivateControle = void 0;
const chatPrivateControle = (socket) => {
    console.log('user conneted', socket);
    socket.on('chatprivate', ({ name, message }) => {
        console.log('name: ' + name, 'message: ' + message);
    });
};
exports.chatPrivateControle = chatPrivateControle;
