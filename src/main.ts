import express from 'express';
import { createServer } from 'http';
import dotenv from 'dotenv' ;
import cors from 'cors'
import './db/conn.db' 
import bodyParser = require('body-parser');

import route from './routes/login/login.route';


const app = express()
dotenv.config()

app.use(cors())
app.use(bodyParser.json());

const httpServer = createServer(app);

const PORT = process.env.SERV_PORT

app.use('/user', route)

httpServer.listen( PORT, () => {
    console.log(`
        Servidor rodando na porta do caralho: ${PORT}
    `)
})
