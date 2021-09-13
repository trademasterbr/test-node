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
exports.connect = void 0;
const pg_1 = require("pg");
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        if (global.connection)
            return global.connection.connect();
        const pool = new pg_1.Pool({
            idleTimeoutMillis: 2000,
            connectionString: "postgres://user:password@test-node_postgres_1:5432/db_test",
        });
        const client = yield pool.connect();
        client.release();
        global.connection = pool;
        return pool.connect();
    });
}
exports.connect = connect;
//# sourceMappingURL=server.js.map