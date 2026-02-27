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
//Read:
const readSubmission = async(req,res) => {
    try {
        const submissions = await Submission.find();
        
        if(!submissions.length === 0) {
            return res.status(404).json({
                message: "No submission found!"
            });
        }

        res.status(200).json({
            message: "Submissions found successfully!",
            submissions
        });



    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!!"
        })
    }
}
//Update:
const updateSubmission = async(req,res) => {
    try {
        
        //Basic Validation:
        if(Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: "Update cannot be empty"
            })
        }

        const submission = await Submission.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        if(!submission) {
            return res.status(400).json({
                message: "Post not found!"
            });
        }

        res.status(200).json({
            message: "Submission Updated Successfully!",
            submission
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!!",
        });
    }
}
//Delete:
const deleteSubmission = async(req,res) => {
    try {
        const submission = await Submission.findByIdAndDelete(req.params.id);
        if(!submission) {
            return res.status(400).json({
                message: "Post not found!!"
            });
        }

        res.status(200).json({
            message: "Post deleted successfully!!"
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!!",
        });
    }
}

export{
    createSubmission,
    updateSubmission,
    readSubmission,
    deleteSubmission
}
