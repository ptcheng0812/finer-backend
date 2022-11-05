import { Router } from "express";
import { createDetails } from "../controllers/details";

const validator = require('../validator/detailValidate');


const router = Router();

router.post("/create",
  validator.validDetail,
  createDetails);

export default router;
