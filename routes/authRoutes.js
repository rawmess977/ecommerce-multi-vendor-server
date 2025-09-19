import { Router } from "express";
import authController from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = Router();

router.post("/admin-login", authController.admin_login);

router.get("/get-user", authMiddleware, authController.getUser);

export default router;
