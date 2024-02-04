import { Router } from "express";
import { signinController, userFindAll } from "../../controller/signin.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

const signinRouter = Router();

signinRouter.post('/signin',signinController)
signinRouter.get('/signin', authMiddleware,userFindAll)

export default signinRouter;