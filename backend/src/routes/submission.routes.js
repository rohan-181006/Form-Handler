import { Router } from "express";
import { createSubmission } from "../controllers/submission.controller.js";

const router = Router();

router.route("/create").post(createSubmission);

export default router;
