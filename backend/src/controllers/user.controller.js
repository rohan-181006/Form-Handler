import { User } from "../models/user.model.js"
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //Checking if user passes empty string
        if (!name?.trim() ||
            !email?.trim() ||
            !password?.trim()
        ) {
            return res.status(400).json({
                message: "All fields necessary!"
            });
        }

        //Checking if user already exists in the DB or not
        const existing = await User.findOne({
            email: email.toLowerCase()
        });
        if (existing) {
            return res.status(400).json({
                message: "User already exists!"
            });
        }

        //Creating new user
        const user = await User.create({
            name,
            email,
            password
        });
        res.status(201).json({
            message: "User registered!",
            user: { id: user._id, email: user.email, name: user.name }
        });


    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!"
        });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email?.trim() ||
            !password?.trim()
        ) {
            return res.status(400).json({
                message: "All fields are necessary!"
            });
        }

        //Finding user in the DB
        const user = await User.findOne({
            email: email
        });

        if (!user) return res.status(400).json({
            message: "User not found!"
        });



        //Compare Password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({
            message: "Incorrect Credentials!"
        });

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },

            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        );

        res.status(200).json({
            message: "User logged in successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

const logoutUser = async (req, res) => {

    const { email } = req.body;
    const user = await User.findOne({
        email
    });

    if (!user) return res.status(404).json({
        message: "User not found!"
    });

    res.status(200).json({
        message: "User logged out successfully"
    });
}


export {
    registerUser,
    loginUser,
    logoutUser
}
