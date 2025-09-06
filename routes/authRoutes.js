import { Router } from "express"
import authController from "../controllers/authController.js"
const router = Router()

router.post('/admin-login', authController.admin_login)

export default router