"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const Controller = new auth_controller_1.AuthController();
exports.default = express_1.default.Router()
    .get('/login', Controller.login)
    .get('/user/:id', Controller.getById)
    .post('/user', Controller.create)
    .patch('/user/:id', Controller.patchUser)
    .delete('/user/:id', Controller.delete);
//# sourceMappingURL=auth.routes.js.map