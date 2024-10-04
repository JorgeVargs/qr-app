import { Router } from "express";
import validateToken from "./validate-token";
import { getPointsUser } from "../controllers/pointsController";
import { decodificarToken } from "./decodificar-token";


const router = Router();

router.get('/history',validateToken,decodificarToken,getPointsUser);


export default router;