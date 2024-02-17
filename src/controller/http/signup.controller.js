"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSignup = void 0;
const signup_services_1 = require("../../services/signup.services");
const createUserSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, username, password } = req.body;
        const user = yield (0, signup_services_1.userSignupServices)(req.body);
        if (!user) {
            console.log('user not created');
        }
        res.status(200).send({
            message: 'sucessfull',
            user
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.createUserSignup = createUserSignup;
