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
exports.AuthService = void 0;
const server_1 = require("../server");
class AuthService {
    static login(user, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield global.connection.query(`SELECT * FROM users WHERE "user" = '${user}' AND password = '${password}'`);
                console.log("res.rows");
                console.log(res.rows);
                if (!res.rows.length)
                    throw "No such user registered!";
                return { token: "JWT" };
            }
            catch (error) {
                throw error;
            }
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield global.connection.query(`
        DELETE FROM users WHERE "id" = ${id}
      `);
                if (res.rowCount == 0)
                    throw 'no register changed';
                return { ok: true };
            }
            catch (error) {
                throw error;
            }
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield global.connection.query(`
        SELECT * FROM users WHERE "id" = ${id}
      `);
                if (!res.rows.length)
                    throw 'no user found';
                return res.rows[0];
            }
            catch (error) {
                throw error;
            }
        });
    }
    static create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const select = yield global.connection.query(`SELECT * FROM users WHERE "user" = '${user.user}'`);
                if (select.rows.length)
                    throw "User already exists!";
                const res = yield global.connection.query(`INSERT INTO users ("user", password, name, status) VALUES 
        ('${user.user}','${user.password}','${user.name}','${user.status}');
        SELECT * FROM users WHERE "user" = '${user.user}'`);
                return res[1].rows[0];
            }
            catch (error) {
                throw error;
            }
        });
    }
    static patch(name, password, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield global.connection.query(`UPDATE users SET name = '${name}', password = '${password}' WHERE id = ${id};
        SELECT * FROM users WHERE "id" = ${id}`);
                throw 'no register changed';
                return res[1].rows[0];
            }
            catch (error) {
                throw error;
            }
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield server_1.connect();
            const res = yield client.query("SELECT * FROM users");
            return res.rows;
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map