import { Router } from "express";
import { createSubmission, deleteSubmission, readSubmission, updateSubmission } from "../controllers/submission.controller.js";
import { verifyAdmin } from "../middleware/verifyAdmin.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/create", createSubmission);


router.patch("/update/:id", verifyJWT, verifyAdmin, updateSubmission);
router.get("/read", verifyJWT, verifyAdmin, readSubmission);
router.delete("/delete/:id", verifyJWT, verifyAdmin, deleteSubmission);

export default router;
