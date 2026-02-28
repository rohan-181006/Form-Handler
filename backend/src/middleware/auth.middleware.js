import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = async (req, res) => {
    try {
        const token = req.header.authorization?.split(" ")[1];

        if (!token) return res.status(400).json({
            message: "Unauthorized!"
        });

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        const user = User.findById(decoded.id).select("-password");

        if (!user) return res.status(401).json({
            message: "Invalid Token"
        });

        req.user = user;

    } catch (error) {
        return res.status(500).json({
            message: "Invalid or Expired token"
        });
    }
} 
