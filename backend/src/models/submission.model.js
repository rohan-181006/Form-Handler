import mongoose, { Schema } from "mongoose";

const submissionSchema = new Schema(
    {
        name:{
            type: String,
            required: [true, "Name is required"],
            trim: true,
            minlength: 2,
            maxlength: 100
        },

        email:{
            type: String,
            required: [true, "Email is required"],
            trim: true,
            unique: false,
            minlength: 6,
            maxlength: 100
        },

        subject: {
            type: String,
            required: [true, "Subject is required"],
            unique: false,
            trim: true,
            minlength: 2,
            maxlength: 150
        },

        message: {
            type: String,
            required: [true, "message is required"],
            unique: false,
            trim: true,
            minlength: 2,
            maxlength: 1000
        },

        status:{
            type: String,
            enum: ["pending", "reviewed", "resolved"],
            default: "pending"
        }
    },

    {
        timestamps: true
    }

)


export const Submission = mongoose.model("Submission",submissionSchema);
