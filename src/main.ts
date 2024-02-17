import express from 'express';
import { createServer } from 'http';
import dotenv from 'dotenv';
import cors from 'cors';
import './db/conn.db';
import bodyParser = require('body-parser');

import registerRoute from './routes/http/signup/signup.route';
import signinRouter from './routes/http/signin/signin.route';
import { Namespace, Server } from 'socket.io';
// import { ioNamespace } from './routes/websocket/chat.route.socket';
import { chatPrivateControler } from './controller/websocket/chat.socket.controler';

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

const httpServer = createServer(app);

export const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods:['GET', 'POST', 'PATCH', 'DELETE']
    }
});

const PORT = process.env.SERV_PORT;

app.use('/user', registerRoute);
app.use('/user', signinRouter);

export const ioNamespace: Namespace = io.of('/chat')
ioNamespace.on('connection', chatPrivateControler)

httpServer.listen(PORT, () => {
    console.log(`
        Servidor rodando na porta do caralho: ${PORT}
    `);
});
