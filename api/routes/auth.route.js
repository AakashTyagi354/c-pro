import { Router } from "express";
import { checkUser, login, signup } from "../controller/auth.controller.js";

const router = new Router();

router.get("/me", checkUser);
router.post("/signin", login);
router.post("/signup", signup);

export default router;
