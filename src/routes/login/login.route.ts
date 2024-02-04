import { Router } from "express"; 
import { userSignin } from "../../controller/login.controller";
const route = Router()

route.get('/', userSignin);