import { Router } from "express";
import { login } from "../Controllers/login.controller";

const router = Router();

router.post("/api/login", login);

export default router;
