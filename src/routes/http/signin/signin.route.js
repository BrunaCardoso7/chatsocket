"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signin_controller_1 = require("../../../controller/http/signin.controller");
const auth_middleware_1 = require("../../../middleware/auth.middleware");
const signinRouter = (0, express_1.Router)();
signinRouter.post('/signin', signin_controller_1.signinController);
signinRouter.get('/signin', auth_middleware_1.authMiddleware, signin_controller_1.userFindAll);
exports.default = signinRouter;
