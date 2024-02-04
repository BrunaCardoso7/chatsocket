import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config()

const secret:string  = process.env.SECRET || '';

export const tokenGenerate = (id:any) => jwt.sign({id: id}, secret, {expiresIn: 86400})