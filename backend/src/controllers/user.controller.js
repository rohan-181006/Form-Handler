import { User } from "../models/user.model.js"

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


export{
    registerUser
}
