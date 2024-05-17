import { Schema, models, model } from 'mongoose';
import INTERESTED_IN from '@/data/interestedIn';

const ContactInquirySchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    interestedIn: {
        type: String,
        required: true,
        enum: INTERESTED_IN.map(item => item.value),
        default: "Others",
    },
    message: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export default models.contact_inquiry || model('contact_inquiry', ContactInquirySchema);