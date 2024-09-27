import { Router } from "express";
import { newUser,loginUser,getDataUser } from "../controllers/userController";
import validateToken from "./validate-token";
import { decodificarToken } from "./decodificar-token";

const router = Router();

router.post('/',newUser);
router.post('/login',loginUser);
router.get('/info',validateToken,decodificarToken,getDataUser);

export default router;