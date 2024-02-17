"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signup_controller_1 = require("../../../controller/http/signup.controller");
const registerRoute = (0, express_1.Router)();
registerRoute.post('/register', signup_controller_1.createUserSignup);
exports.default = registerRoute;
