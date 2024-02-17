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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userFindAll = exports.signinController = void 0;
const signin_services_1 = require("../../services/signin.services");
const bcrypt_1 = __importDefault(require("bcrypt"));
const token_config_1 = require("../../config/token.config");
const signin_validation_1 = require("../../validations/signin.validation");
const signinController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        (0, signin_validation_1.validateLogin)({ username, password });
        const userSignin = yield (0, signin_services_1.signinServices)({ username });
        if (userSignin !== null && userSignin !== undefined) {
            const passwordCompare = bcrypt_1.default.compareSync(password, userSignin.password);
            const token = (0, token_config_1.tokenGenerate)(userSignin._id);
            if (passwordCompare) {
                return res.status(200).send({
                    message: "Successful",
                    token,
                    userSignin
                });
            }
            else {
                return res.status(401).json({ error: 'Incorrect password' });
            }
        }
    }
    catch (error) {
        console.error(error);
    }
});
exports.signinController = signinController;
const userFindAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, signin_services_1.findallservice)();
        return res.status(200).send({
            users
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.userFindAll = userFindAll;
