import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config()

const secret:string  = process.env.SECRET || '';

export const tokenGenerate = (id:any) => jwt.sign({id: id}, secret, {expiresIn: 86400})

export const routeVerify = (socket: any, next: any) => {
    try {
        const token = socket.handshake.query.token
        if(!token){
            console.error("Faltou o token, pfv tente novamente")
        }
        jwt.verify(token, secret, (err: any, decoded: any)=>{
            if(err) {
                return next(new Error('Falha na autenticação'))
            }
            socket.user = decoded
            next()
        })
    } catch (error) {
        console.error("Falha ao atenticar o token: ", error)
    }
}