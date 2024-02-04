import { Router } from "express"; 
import { createUserSignup } from "../../controller/login.controller";
const route = Router()

route.post('/register', createUserSignup);

export default route;