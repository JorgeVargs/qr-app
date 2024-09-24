"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routesUser_1 = __importDefault(require("../routes/routesUser"));
class Server {
    constructor() {
        this.app = (0, express_1.default)(); //se instancia expres
        this.port = process.env.PORT || '3000'; //se coloca el puerto por el cual estará corriendo
        this.listen();
        this.middlewares(); //debe de ir antes de las rutas
        this.routes();
        // this.dbConnection();
    }
    listen() {
        //se inicializa el servidor
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
    routes() {
        this.app.use('/api/users', routesUser_1.default);
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
}
exports.Server = Server;
