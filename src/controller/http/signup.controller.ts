import { Request, Response } from 'express';
import { userSignupServices } from '../../services/http/signup.services';
export  const createUserSignup = async (req: Request, res: Response) =>{
    try{

        const { name, username, password } = req.body;
        if (!name && !username && !password) {
            console.error("prencha todos os campos")
        }
        const user = await userSignupServices(req.body);
        if(!user){
            console.log('user not created')
        }
        res.status(200).send({
            message: 'sucessfull',
            user
        })
        
    } catch (error) {
        console.error(error)
    }
}
    