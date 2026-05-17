import { model, models, Schema } from "mongoose";
import { inquiryInterests } from "@/content/site";

const contactInquirySchema = new Schema(
    {
        firstName: { type: String, required: true, trim: true },
        lastName: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true },
        mobile: { type: String, required: true, trim: true },
        interestedIn: { type: String, required: true, enum: inquiryInterests, default: "Other" },
        message: { type: String, required: true, trim: true },
    },
    { timestamps: true },
);

export const ContactInquiry =
    models.contact_inquiry || model("contact_inquiry", contactInquirySchema);
