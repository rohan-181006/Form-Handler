import mongoose, { Schema } from "mongoose";

const submissionSchema = new Schema(
    {
        name:{
            type: String,
            required: [true, "Name is required"],
            unique: false,
            trim: true,
            minLength: 2,
            maxLength: 100
        },

        email:{
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
            minLength: 6,
            maxLength: 100
        },

        subject: {
            type: String,
            required: [true, "Subject is required"],
            unique: false,
            trim: true,
            minLength: 2,
            maxLength: 150
        },

        message: {
            type: String,
            required: [true, "message is required"],
            unique: false,
            trim: true,
            minLength: 2,
            maxLength: 1000
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
