import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { findByIdService } from '../services/signin.services';
 
dotenv.config()

const secret: Secret = process.env.SECRET || ''

export const authMiddleware = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            console.log('Authorization not found');
            return res.status(401).send({
                message: 'Authorization not found'
            });
        }

        const parts = authorization.split(' ')

        const [ schema, token ] = parts;

        if(schema !== "Bearer"){
            res.status(401).send("bearer invalid")
        }
    
        const { id } = jwt.verify( token, secret) as JwtPayload

        const user = await findByIdService(id)

        if(!user){
            console.log('Não autorizado sem id')
        }

        console.log(id)

        return next()
    } catch (error) {
        console.log(error)
    }
}