import { Request, Response } from "express";
import { findallservice, signinServices } from "../../services/http/signin.services";

import bcrypt from 'bcrypt';
import { tokenGenerate } from "../../config/token.config";
import { validateLogin } from "../../validations/signin.validation";

export const signinController = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
 
        validateLogin({ username, password })
        
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