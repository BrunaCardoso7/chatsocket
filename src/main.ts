import express from 'express';
import { createServer } from 'http';
import dotenv from 'dotenv' ;
import cors from 'cors'
import './db/conn.db' 

dotenv.config()

const app = express()
app.use(cors())

const httpServer = createServer(app);

const PORT = process.env.SERV_PORT

httpServer.listen( PORT, () => {
    console.log(`
        Servidor rodando na porta do caralho: ${PORT}
    `)
})
