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
const userService_1 = require("../services/userService");
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, email, password, rol } = req.body;
    try {
        //validar si existe el usuario
        const userExist = yield (0, userService_1.finUserByEmail)(email);
        if (userExist) {
            return res.status(400).json({
                mensaje: "El usuario ya existe"
            });
        }
        //encriptar contraseña
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        //crear usuario
        const newIuserId = yield (0, userService_1.createUser)({
            nombre, email, password: hashedPassword, rol
        });
        return res.status(201).json({
            mensaje: "Usuario creado con exito",
            idUser: newIuserId
        });
    }
    catch (error) {
        console.log(`Error: ${error}`);
    }
    res.json({
        mensaje: "registro de usuario",
    });
});
exports.newUser = newUser;
const loginUser = (req, res) => {
    try {
        //valida si existe el usuario con el correo
        //vcalida si la contraseña es la misma
        //crea el token con jwt
        res.status(200).json({ mensaje: "Inicio de sesión exitoso" });
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al iniciar sesión." });
    }
};
exports.loginUser = loginUser;
const getUser = (req, res) => {
    res.json({
        mensaje: "get data user"
    });
};
exports.getUser = getUser;
