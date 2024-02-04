import { Router } from "express"; 
import { createUserSignup } from "../../../controller/http/signup.controller";
const registerRoute = Router()

registerRoute.post('/register',  createUserSignup);

export default registerRoute;