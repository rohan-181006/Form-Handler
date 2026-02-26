import { Submission } from '../models/submission.model.js';

//Create:
const createSubmission = async(req,res) => {
    try {
        const {name, email, subject ,message} = req.body;

        //Validation is user is passing empty string.
        if(
            !name?.trim() ||
            !email?.trim() ||
            !subject?.trim() ||
            !message?.trim()
        ) {
            return res.status(400).json({
                message: "All fields are required!"
            });
        }

        //Create Submission finally
        const submission = await Submission.create({
            name,
            email,
            subject,
            message
        });

        res.status(201).json({
            message: "Post created successfully",
            submission
        })


    } catch (error) {
        res.status(500).json({
            message: "Internal server error!"
        })
    }
}


export{
    createSubmission
}
