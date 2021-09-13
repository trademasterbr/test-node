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
exports.AuthController = void 0;
const auth_service_1 = require("./auth.service");
class AuthController {
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id)
                    throw 'no such id';
                res.status(200).json(yield auth_service_1.AuthService.getById(id));
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id)
                    throw 'no such Id!';
                res.status(200).json(yield auth_service_1.AuthService.delete(id));
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user, pwd } = req.query;
                if (!user || !pwd)
                    throw "No user or password informed!";
                res.status(200).json(yield auth_service_1.AuthService.login(user, pwd));
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user, name, status, password } = req.body;
                if (!user || !name || !status || !password)
                    throw "Body must have user, name, status and password!";
                res.status(201).send(yield auth_service_1.AuthService.create({ user, name, status, password }));
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    }
    patchUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, password } = req.body;
                const { id } = req.params;
                if (!name || !password)
                    throw "Body must have name and password!";
                res.status(200).json(yield auth_service_1.AuthService.patch(name, password, id));
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ error });
            }
        });
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map