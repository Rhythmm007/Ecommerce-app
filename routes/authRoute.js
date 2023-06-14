import express from "express";
import { loginController, registerController, testController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router()

// routing
// METHOD || POST
router.post('/register', registerController)

// LOGIN || POST
router.post('/login', loginController)

// Test ||
router.get('/test', requireSignIn, isAdmin, testController)

export default router