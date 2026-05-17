"use server";

import { createTransport } from "nodemailer";
import { env } from "@/env";
import { dbConnect } from "@/lib/db";
import { contactInquirySchema, type ContactInquiryInput } from "@/lib/validations/contact";
import { ContactInquiry } from "@/models/contact-inquiry";

export async function saveContactInquiry(payload: ContactInquiryInput) {
    const parsed = contactInquirySchema.safeParse(payload);

    if (!parsed.success) {
        return {
            status: false,
            message: "Please provide valid contact details.",
            issues: parsed.error.flatten(),
        };
    }

    try {
        await dbConnect();
        await ContactInquiry.create(parsed.data);

        if (env.GMAIL_USER && env.GMAIL_APP_PASSWORD && env.EMAIL_FROM) {
            const transporter = createTransport({
                service: "gmail",
                auth: {
                    user: env.GMAIL_USER,
                    pass: env.GMAIL_APP_PASSWORD,
                },
            });

            await transporter.sendMail({
                from: env.EMAIL_FROM,
                to: env.GMAIL_USER,
                subject: `Portfolio inquiry from ${parsed.data.firstName} ${parsed.data.lastName}`,
                text: `${parsed.data.message}\n\nInterested In: ${parsed.data.interestedIn}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.mobile}`,
            });
        }

        return { status: true, message: "Thanks for reaching out. I will get back to you soon." };
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unexpected error";
        return { status: false, message };
    }
}
