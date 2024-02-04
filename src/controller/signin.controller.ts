import { Request, Response } from "express";
import { findallservice, signinServices } from "../services/signin.services";

import bcrypt from 'bcrypt';
import { tokenGenerate } from "../config/token.config";

export const signinController = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        if (!username && !password) {
            console.log('operation incompleted')
        }

        if (username === undefined || password === undefined) {
            console.log('Operation incomplete');
            return res.status(400).json({ error: 'Both username and password are required.' });
        }
        
        const userSignin = await signinServices({ username });
        
        if (userSignin !== null && userSignin !== undefined) {
            const passwordCompare = bcrypt.compareSync(password, userSignin.password);

            const token = tokenGenerate(userSignin._id);

            if (passwordCompare) {
                return res.status(200).send({
                    message: "Successful",
                    token,
                    userSignin
                });
            } else {
                return res.status(401).json({ error: 'Incorrect password' });
            }
        }
    } catch (error) {
        console.error(error)
    }
}
export const userFindAll = async (req: Request, res: Response) => {
    try {
        const users = await findallservice()
        return res.status(200).send({
            users
        })
    } catch (error) {
        console.log(error)
    }
}