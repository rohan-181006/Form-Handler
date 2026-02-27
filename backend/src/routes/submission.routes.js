import { Router } from "express";
import { createSubmission, deleteSubmission, readSubmission, updateSubmission } from "../controllers/submission.controller.js";

const router = Router();

router.route("/create").post(createSubmission);
router.route("/update/:id").patch(updateSubmission);
router.route("/read").get(readSubmission);
router.route("/delete/:id").delete(deleteSubmission);

export default router;
