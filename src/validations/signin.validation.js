"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = void 0;
const validateLogin = (data) => {
    if (!data.username && !data.password) {
        console.log('operation incompleted');
    }
    if (data.username === undefined || data.username === undefined) {
        console.log('Operation incomplete');
    }
};
exports.validateLogin = validateLogin;
