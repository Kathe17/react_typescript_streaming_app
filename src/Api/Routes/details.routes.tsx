import { Router } from "express";
import { getDetails } from "../Controllers/details.controller";

const router = Router();

router.get("/api/details", getDetails);

export default router;
