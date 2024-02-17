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
exports.findallservice = exports.findByIdService = exports.signinServices = void 0;
const user_model_1 = require("../model/user.model");
const signinServices = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username } = body;
        const user = yield user_model_1.User.findOne({ username }).select('+password');
        return user;
    }
    catch (error) {
        console.log(error);
    }
});
exports.signinServices = signinServices;
const findByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = user_model_1.User.findById(id);
        return user;
    }
    catch (error) {
        console.log(error);
    }
});
exports.findByIdService = findByIdService;
const findallservice = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.User.find();
        return users;
    }
    catch (error) {
        console.log(error);
    }
});
exports.findallservice = findallservice;
