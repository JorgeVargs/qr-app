import { Router } from "express";
import validateToken from "./validate-token";
import { newQrCode,getQrcodes,scanCode } from "../controllers/qrcodeController";
import { decodificarToken } from "./decodificar-token";

const router = Router();

router.post('/',newQrCode);//administrador crear un código qr
router.get('/', getQrcodes);//administrador obtener todos los códigos qr creados

router.post('/escanea',validateToken,decodificarToken,scanCode); //usuario escanea código y envía el valor del código QR



export default router;