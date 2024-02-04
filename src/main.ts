import express from 'express';
import { createServer } from 'http';
import dotenv from 'dotenv' ;
import cors from 'cors'
import './db/conn.db' 
import bodyParser = require('body-parser');

import registerRoute from './routes/signup/signup.route';
import signinRouter from './routes/signin/signin.route';

const app = express()
dotenv.config()

app.use(cors())
app.use(bodyParser.json());

const httpServer = createServer(app);
const PORT = process.env.SERV_PORT

app.use('/user', registerRoute)
app.use('/user', signinRouter)


httpServer.listen( PORT, () => {
    console.log(`
        Servidor rodando na porta do caralho: ${PORT}
    `)
})
