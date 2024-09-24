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
exports.getUser = exports.loginUser = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, rol } = req.body;
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    res.json({
        mensaje: "registro de usuario",
        password: hashedPassword
    });
});
exports.newUser = newUser;
const loginUser = (req, res) => {
    res.json({
        mensaje: "login de usuario"
    });
};
exports.loginUser = loginUser;
const getUser = (req, res) => {
    res.json({
        mensaje: "get data user"
    });
};
exports.getUser = getUser;
