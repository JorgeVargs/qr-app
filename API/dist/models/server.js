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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const promise_1 = __importDefault(require("mysql2/promise"));
const cors_1 = __importDefault(require("cors"));
const routesUser_1 = __importDefault(require("../routes/routesUser"));
class Server {
    constructor() {
        this.app = (0, express_1.default)(); //se instancia expres
        this.port = process.env.PORT || '3000'; //se coloca el puerto por el cual estará corriendo
        this.listen();
        this.middlewares(); //debe de ir antes de las rutas
        this.routes();
        this.dbConnection();
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
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield promise_1.default.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'mysql',
                database: 'app-qr'
            });
            try {
                connection.connect();
                console.log('se realizó la conexión correctamente');
            }
            catch (error) {
                console.log('error', error);
            }
        });
    }
}
exports.Server = Server;
