import { Router } from "express";
import { newUser,loginUser,getUser } from "../controllers/userController";

const router = Router();

router.post('/',newUser);
router.post('/login',loginUser);
router.get('/',getUser);

export default router;