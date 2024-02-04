import { Router } from "express"; 
import { createUserSignup } from "../../controller/signup.controller";
const registerRoute = Router()

registerRoute.post('/register',  createUserSignup);

export default registerRoute;