import { z } from "zod";
import { inquiryInterests } from "@/content/site";

export const contactInquirySchema = z.object({
    firstName: z.string().trim().min(2).max(60),
    lastName: z.string().trim().min(1).max(60),
    email: z.string().trim().email(),
    mobile: z.string().trim().min(8).max(20),
    interestedIn: z.enum(inquiryInterests),
    message: z.string().trim().min(10).max(2000),
});

export type ContactInquiryInput = z.infer<typeof contactInquirySchema>;
