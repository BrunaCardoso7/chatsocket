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
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const signin_services_1 = require("../services/signin.services");
dotenv_1.default.config();
const secret = process.env.SECRET || '';
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            console.log('Authorization not found');
            return res.status(401).send({
                message: 'Authorization not found'
            });
        }
        const parts = authorization.split(' ');
        const [schema, token] = parts;
        if (schema !== "Bearer") {
            res.status(401).send("bearer invalid");
        }
        const { id } = jsonwebtoken_1.default.verify(token, secret);
        const user = yield (0, signin_services_1.findByIdService)(id);
        if (!user) {
            console.log('Não autorizado sem id');
        }
        console.log(id);
        return next();
    }
    catch (error) {
        console.log(error);
    }
});
exports.authMiddleware = authMiddleware;
