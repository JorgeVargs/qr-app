import { Router } from "express";
import validateToken from "./validate-token";
import { newQrCode,getQrcodes,scanCode } from "../controllers/qrcodeController";

const router = Router();

router.post('/',newQrCode);//administrador crear un código qr
router.get('/', getQrcodes);//administrador obtener todos los códigos qr creados

router.post('/escanea/:id_usuario/:qrcode',scanCode); //usuario escanea código y envía el codigo y su id
router.get('/:usuario')//obtiene lista de códigos qr escaneados


export default router;