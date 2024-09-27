"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const validate_token_1 = __importDefault(require("./validate-token"));
const decodificar_token_1 = require("./decodificar-token");
const router = (0, express_1.Router)();
router.post('/', userController_1.newUser);
router.post('/login', userController_1.loginUser);
router.get('/info', validate_token_1.default, decodificar_token_1.decodificarToken, userController_1.getDataUser);
exports.default = router;
