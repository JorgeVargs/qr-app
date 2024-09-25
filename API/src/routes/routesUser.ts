import { Router } from "express";
import { newUser,loginUser,getUser } from "../controllers/userController";
import validateToken from "./validate-token";

const router = Router();

router.post('/',newUser);
router.post('/login',loginUser);
router.get('/:id',validateToken,getUser);

export default router;