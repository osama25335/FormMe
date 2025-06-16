import { Router } from "express";
import { login, signup, checkAuth, logout } from "../controllers/auth.controller.js";
import { protectRoute } from "../midleware/auth.midleware.js";

const router = Router();
router.post("/signup", signup);
router.post("/login",login);
router.post("/logout",logout);
router.get("/checkauth", protectRoute, checkAuth);
export default router;