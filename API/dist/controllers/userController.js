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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, email, password, rol } = req.body;
    try {
        //validar si existe el usuario
        const userExist = yield (0, userService_1.finUserByEmail)(email);
        if (userExist.length > 0) {
            return res.status(400).json({
                mensaje: "El email ya existe"
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
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_usuario, email, password } = req.body;
    try {
        //valida si existe el usuario con el correo
        const userExist = yield (0, userService_1.finUserByEmail)(email);
        if (userExist.length == 0) {
            return res.status(400).json({
                mensaje: `No existe el usuario con el mail ${email}`
            });
        }
        //validamos si la contraseña es la misma
        const passwordValid = yield bcrypt_1.default.compare(password, userExist[0].password);
        if (!passwordValid) {
            return res.status(400).json({
                mensaje: "Contraseña Inválida"
            });
        }
        const token = jsonwebtoken_1.default.sign({
            email: email,
            id_usuario: id_usuario
        }, process.env.TOKEN_SECRET || 'brqd8rUYKdesqAf6xZUGT4q90epvXLB5g83Dwwl6sh9IZ4SKukd5bvYGKmxi7eQl', {
            expiresIn: '1800s'
        });
        //crea el token con jwt
        res.status(200).json(token);
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al iniciar sesión.", data: error });
    }
});
exports.loginUser = loginUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield (0, userService_1.findUserById)(id);
        console.log(user.length);
        if (user.length == 0) {
            return res.status(404).json({
                mensaje: 'Usuario no encontrado'
            });
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener los datos del usuario.",
            error: error
        });
    }
});
exports.getUser = getUser;
