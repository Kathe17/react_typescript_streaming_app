import { Router } from "express";
import { getCategories } from "../Controllers/categories.controller";

const router = Router();

router.get("/api/categories", getCategories);

export default router;
