import { Router } from "express";

import { createDetails } from "../controllers/details";

const router = Router();

router.post("/create", createDetails);

export default router;
