"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const server_1 = require("./server");
const port = 3000;
const HOST = "0.0.0.0";
const app = express_1.default();
app.use(express_1.default.json());
routes_1.default(app);
server_1.connect();
app.listen(port, HOST, () => {
    console.log("listening ...");
});
//# sourceMappingURL=index.js.map