import express from "express";
import { bookcourse, loginUser, razorpayWebhook, registerUser } from "../Controllers/userController.js";

const router = express.Router();

router.post("/register-user", registerUser);
router.post("/login-user", loginUser);
router.post("/booking", bookcourse)
router.post('/update-payment-status', razorpayWebhook)

export default router;
    