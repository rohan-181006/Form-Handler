import { Router } from 'express';
import { loginUser, logoutUser, registerUser } from '../controllers/user.controller.js';
import {verifyJWT} from "../middleware/auth.middleware.js";


const router = Router();

router.get("/profile",verifyJWT,(req,res,next) => {
    res.json({
        message: "Profile fetched",
        user: req.user
    });
});

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);

export default router;

