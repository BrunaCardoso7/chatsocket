"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ioNamespace = exports.io = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
require("./db/conn.db");
const bodyParser = require("body-parser");
const signup_route_1 = __importDefault(require("./routes/http/signup/signup.route"));
const signin_route_1 = __importDefault(require("./routes/http/signin/signin.route"));
const socket_io_1 = require("socket.io");
// import { ioNamespace } from './routes/websocket/chat.route.socket';
const chat_socket_controler_1 = require("./controller/websocket/chat.socket.controler");
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, cors_1.default)());
app.use(bodyParser.json());
const httpServer = (0, http_1.createServer)(app);
exports.io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PATCH', 'DELETE']
    }
});
const PORT = process.env.SERV_PORT;
app.use('/user', signup_route_1.default);
app.use('/user', signin_route_1.default);
exports.ioNamespace = exports.io.of('/chat');
exports.ioNamespace.on('connection', chat_socket_controler_1.chatPrivateControle);
httpServer.listen(PORT, () => {
    console.log(`
        Servidor rodando na porta do caralho: ${PORT}
    `);
});
