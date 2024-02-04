import { Request, Response } from 'express';
import { userSignupServices } from '../services/signin.services';
export  const createUserSignup = async (req: Request, res: Response) =>{
    try{
        const { name, username, password } = req.body;
    
        const user = await userSignupServices(req.body);

        if(!user){
            console.log('user not created')
        }

        res.status(200).send({
            message: 'sucessfull',
            user: {
                name,
                username,
                password,
            }
        })

    } catch (error) {
        console.error(error)
    }
}
    